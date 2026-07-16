/* ============================================================
   PANEL DE ADMINISTRACIÓN - One Play More
   ------------------------------------------------------------
   Se activa escribiendo la palabra "admin" en cualquier parte
   de la página (fuera de campos de texto), o con Ctrl+Alt+A.

   Permite crear, editar y borrar productos y banners de forma
   visual, usar imágenes por URL o desde archivos/carpeta local
   de tu computador, y al final genera un data.js actualizado
   (+ un .zip con las imágenes nuevas) listos para subir a GitHub.

   No modifica data.js ni script.js: solo lee/edita en memoria
   los arrays "products" y "preorderBanners" que esos archivos
   ya declaran.
   ============================================================ */
(function () {
    'use strict';

    const DRAFT_KEY = 'opm_admin_draft_v1';
    const FOLDER_KEY = 'opm_admin_image_folder';
    let editingProductId = null;
    let editingBannerId = null;
    let editingExpansionSlug = null;
    let panelBuilt = false;
    let isOpen = false;

    // path (ej "imagenes/productos/foo.jpg") -> File local pendiente de subir
    const pendingImages = new Map();

    /* ============================================================
       ESTILOS (usa las variables de theme del sitio nuevo)
       ============================================================ */
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
        .opma-overlay {
            position: fixed; inset: 0; background: rgba(10,8,20,0.7); z-index: 99999;
            display: none; align-items: flex-start; justify-content: center;
            padding: 30px 16px; overflow-y: auto; font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }
        .opma-overlay.open { display: flex; }
        .opma-panel {
            background: var(--bg-surface); color: var(--text-primary);
            width: 100%; max-width: 980px; border-radius: var(--radius);
            box-shadow: 0 10px 40px rgba(0,0,0,0.45); overflow: hidden;
            display: flex; flex-direction: column; max-height: calc(100vh - 60px);
            border: 1px solid var(--border-color);
        }
        body.dark .opma-panel { background: var(--bg-surface-dark); color: var(--text-primary-dark); border-color: var(--border-color-dark); }

        .opma-header {
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            color: #fff; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between;
        }
        .opma-header h2 { margin: 0; font-size: 18px; }
        .opma-header small { display:block; font-weight: normal; opacity: 0.85; font-size: 12px; margin-top: 2px;}
        .opma-close {
            background: rgba(255,255,255,0.15); border: none; color: #fff; width: 32px; height: 32px;
            border-radius: 50%; font-size: 18px; cursor: pointer; line-height: 1;
        }
        .opma-close:hover { background: rgba(255,255,255,0.3); }

        .opma-tabs { display: flex; border-bottom: 1px solid var(--border-color); background: var(--bg-body); flex-shrink: 0; }
        body.dark .opma-tabs { background: var(--bg-body-dark); border-color: var(--border-color-dark); }
        .opma-tab {
            flex: 1; padding: 12px; background: none; border: none; cursor: pointer;
            font-size: 14px; font-weight: 600; color: var(--text-secondary); border-bottom: 3px solid transparent;
            font-family: inherit;
        }
        body.dark .opma-tab { color: var(--text-secondary-dark); }
        .opma-tab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        body.dark .opma-tab.active { color: var(--color-accent); border-bottom-color: var(--color-accent); }

        .opma-body { padding: 18px 20px; overflow-y: auto; }
        .opma-tabcontent { display: none; }
        .opma-tabcontent.active { display: block; }

        .opma-toolbar { display: flex; gap: 10px; margin-bottom: 14px; flex-wrap: wrap; }
        .opma-toolbar input[type="text"], .opma-toolbar input[type="search"] { flex: 1; min-width: 180px; }

        .opma-panel input, .opma-panel select, .opma-panel textarea {
            width: 100%; padding: 8px 10px; border: 1px solid var(--border-color); border-radius: 8px;
            background: var(--bg-body); color: var(--text-primary); font-size: 14px; box-sizing: border-box;
            font-family: inherit;
        }
        body.dark .opma-panel input, body.dark .opma-panel select, body.dark .opma-panel textarea {
            background: var(--bg-body-dark); border-color: var(--border-color-dark); color: var(--text-primary-dark);
        }
        .opma-panel textarea { resize: vertical; min-height: 60px; font-family: monospace; font-size: 12.5px; }
        .opma-panel input[type="file"] { padding: 6px; cursor: pointer; }
        .opma-panel input[type="color"] { padding: 2px; height: 38px; cursor: pointer; }

        .opma-btn {
            padding: 9px 16px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px;
            font-weight: 600; font-family: inherit;
        }
        .opma-btn-primary { background: var(--color-primary); color: #fff; }
        .opma-btn-primary:hover { background: var(--color-primary-light); }
        .opma-btn-secondary { background: rgba(0,0,0,0.06); color: var(--text-primary); border: 1px solid var(--border-color); }
        body.dark .opma-btn-secondary { background: rgba(255,255,255,0.06); color: var(--text-primary-dark); border-color: var(--border-color-dark); }
        .opma-btn-danger { background: #c62828; color: #fff; }
        .opma-btn-danger:hover { opacity: 0.85; }
        .opma-btn-sm { padding: 5px 10px; font-size: 12px; }

        .opma-list { display: flex; flex-direction: column; gap: 8px; }
        .opma-item {
            display: flex; align-items: center; gap: 12px; padding: 10px;
            border: 1px solid var(--border-color); border-radius: 10px; background: var(--bg-body);
        }
        body.dark .opma-item { background: var(--bg-body-dark); border-color: var(--border-color-dark); }
        .opma-item img { width: 46px; height: 46px; object-fit: cover; border-radius: 8px; flex-shrink: 0; background:#ddd; }
        .opma-item-info { flex: 1; min-width: 0; }
        .opma-item-info strong { display:block; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .opma-item-info span { font-size: 12px; color: var(--text-secondary); }
        body.dark .opma-item-info span { color: var(--text-secondary-dark); }
        .opma-item-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .opma-badge { display: inline-block; padding: 1px 7px; border-radius: 10px; font-size: 11px; margin-right: 4px; background: var(--color-primary); color: #fff; }

        .opma-form { border: 1px solid var(--border-color); border-radius: var(--radius); padding: 16px; margin-bottom: 16px; }
        body.dark .opma-form { border-color: var(--border-color-dark); }
        .opma-form h3 { margin-top: 0; }
        .opma-field { margin-bottom: 12px; }
        .opma-field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px; }
        .opma-field small { display:block; font-weight: normal; opacity: 0.7; font-size: 11.5px; margin-top:3px; }
        .opma-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .opma-row > .opma-field { flex: 1; min-width: 160px; }
        .opma-checks { display: flex; gap: 14px; flex-wrap: wrap; }
        .opma-check { display: flex; align-items: center; gap: 6px; font-size: 13px; }
        .opma-check input { width: auto; }
        .opma-form-actions { display: flex; gap: 10px; margin-top: 14px; }
        .opma-hidden { display: none !important; }
        .opma-empty { text-align: center; padding: 30px 10px; opacity: 0.6; font-size: 14px; }

        .opma-img-tools { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; align-items: center; }
        .opma-img-tools input[type=file] { flex: 1; min-width: 160px; }
        .opma-preview-strip { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
        .opma-preview-thumb { position: relative; width: 56px; height: 56px; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); }
        body.dark .opma-preview-thumb { border-color: var(--border-color-dark); }
        .opma-preview-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .opma-preview-thumb .opma-pending-tag {
            position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,131,143,0.85); color: #fff;
            font-size: 8.5px; text-align: center; padding: 1px 0;
        }
        .opma-inline-preview { width: 34px; height: 34px; object-fit: cover; border-radius: 6px; display: none; vertical-align: middle; border: 1px solid var(--border-color); }

        .opma-export-box { padding: 6px 10px 20px; }
        .opma-export-box > p { opacity: 0.8; font-size: 14px; margin-bottom: 16px; text-align: center; }
        .opma-export-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; }
        .opma-note {
            background: rgba(0, 188, 212, 0.12); border: 1px solid var(--color-cyan, #00bcd4); color: var(--text-primary);
            border-radius: 8px; padding: 10px 14px; font-size: 13px; margin-bottom: 14px;
        }
        body.dark .opma-note { color: var(--text-primary-dark); }
        .opma-section-title { font-size: 14px; font-weight: 700; margin: 18px 0 10px; }
        `;
        document.head.appendChild(style);
    }

    /* ============================================================
       UTILIDADES GENERALES
       ============================================================ */
    function fmtPrice(n) {
        try { return formatCOP(n); } catch (e) { return '$' + Number(n || 0).toLocaleString('es-CO'); }
    }

    function escapeHtml(str) {
        return String(str || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function nextProductId() {
        let max = 0;
        products.forEach(p => { if (p.id > max) max = p.id; });
        return max + 1;
    }

    function refreshStorefront() {
        try {
            if (typeof filteredProducts !== 'undefined') filteredProducts = [...products];
            if (typeof renderProducts === 'function') renderProducts(products);
        } catch (e) { /* ignore */ }
        try {
            if (typeof renderPreorderBanners === 'function') renderPreorderBanners();
        } catch (e) { /* ignore */ }
    }

    function saveDraft() {
        try {
            localStorage.setItem(DRAFT_KEY, JSON.stringify({
                products: products,
                preorderBanners: preorderBanners,
                expansionNames: expansionNames,
                savedAt: new Date().toISOString()
            }));
        } catch (e) { /* almacenamiento lleno o bloqueado, ignorar */ }
    }

    function jsBlock(val) {
        return JSON.stringify(val, null, 4).replace(/"([a-zA-Z_$][\w$]*)":/g, '$1:');
    }

    function generateDataJs() {
        return `let products = ${jsBlock(products)};


// Banderas reales de internet
const languageFlags = ${jsBlock(languageFlags)};

// Nombres de países
const countryNames = ${jsBlock(countryNames)};

// Nombres de expansiones para mostrar
const expansionNames = ${jsBlock(expansionNames)};

// Banners de preventa configurables
const preorderBanners = ${jsBlock(preorderBanners)};
`;
    }

    /* ============================================================
       EXPANSIONES
       ============================================================ */
    // Agrega/actualiza/quita la <option> correspondiente en el <select id="expansionFilter">
    // del sitio en vivo, para que el filtro funcione de inmediato sin recargar.
    function syncExpansionOption(slug, displayName, include) {
        const select = document.getElementById('expansionFilter');
        if (!select) return;
        let opt = Array.from(select.options).find(o => o.value === slug);
        if (include) {
            if (!opt) {
                opt = document.createElement('option');
                opt.value = slug;
                select.appendChild(opt);
            }
            opt.textContent = displayName;
        } else if (opt) {
            opt.remove();
        }
    }

    function isExpansionInFilter(slug) {
        const select = document.getElementById('expansionFilter');
        if (!select) return false;
        return Array.from(select.options).some(o => o.value === slug);
    }

    function generateExpansionFilterHtml() {
        const select = document.getElementById('expansionFilter');
        if (!select) return '';
        return Array.from(select.options)
            .filter(o => o.value !== 'all')
            .map(o => `                    <option value="${o.value}">${escapeHtml(o.textContent)}</option>`)
            .join('\n');
    }

    async function copyExpansionFilterHtml() {
        const html = generateExpansionFilterHtml();
        if (!html) { alert('No hay expansiones en el filtro todavía.'); return; }
        try {
            await navigator.clipboard.writeText(html);
            alert('¡Copiado! Pega este bloque reemplazando las <option> del <select id="expansionFilter"> en tu index.html.');
        } catch (e) {
            alert('No se pudo copiar automáticamente. Abre la consola o usa el botón de exportar data.js.');
        }
    }

    function renderExpansionList() {
        const list = document.getElementById('opmaExpansionList');
        if (!list) return;
        const entries = Object.entries(expansionNames || {});
        if (entries.length === 0) {
            list.innerHTML = '<div class="opma-empty">No hay expansiones registradas todavía.</div>';
            return;
        }
        list.innerHTML = entries.map(([slug, name]) => `
            <div class="opma-item">
                <div class="opma-item-info">
                    <strong>${escapeHtml(name)}</strong>
                    <span>slug: ${escapeHtml(slug)} ${isExpansionInFilter(slug) ? '· ✅ en el filtro del sitio' : '· ⚠️ no está en el filtro desplegable'}</span>
                </div>
                <div class="opma-item-actions">
                    <button class="opma-btn opma-btn-secondary opma-btn-sm" data-editexp="${escapeHtml(slug)}"><i class="fas fa-pen"></i></button>
                    <button class="opma-btn opma-btn-danger opma-btn-sm" data-delexp="${escapeHtml(slug)}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');
        list.querySelectorAll('[data-editexp]').forEach(btn => {
            btn.addEventListener('click', () => openExpansionForm(btn.dataset.editexp));
        });
        list.querySelectorAll('[data-delexp]').forEach(btn => {
            btn.addEventListener('click', () => deleteExpansion(btn.dataset.delexp));
        });
    }

    function deleteExpansion(slug) {
        const name = expansionNames[slug];
        if (!confirm(`¿Borrar la expansión "${name}" (${slug})? Los productos que ya la usan conservarán el slug, pero dejará de tener nombre visible y de estar en el filtro.`)) return;
        delete expansionNames[slug];
        syncExpansionOption(slug, null, false);
        saveDraft();
        renderExpansionList();
    }

    function openExpansionForm(slug) {
        editingExpansionSlug = slug || null;
        const isEdit = !!slug;
        const name = isEdit ? expansionNames[slug] : '';
        const inFilter = isEdit ? isExpansionInFilter(slug) : true;

        const container = document.getElementById('opmaExpansionForm');
        container.innerHTML = `
            <div class="opma-form">
                <h3>${isEdit ? 'Editar expansión' : 'Nueva expansión'}</h3>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>Slug (valor interno, sin espacios)</label>
                        <input type="text" id="ef_slug" value="${escapeHtml(slug || '')}" placeholder="Ej: pitch-black-2">
                        <small>Este es el valor que debes escribir en el campo "Expansión" de cada producto.</small>
                    </div>
                    <div class="opma-field">
                        <label>Nombre visible</label>
                        <input type="text" id="ef_name" value="${escapeHtml(name)}" placeholder="Ej: Pitch Black 2">
                    </div>
                </div>
                <div class="opma-checks">
                    <label class="opma-check"><input type="checkbox" id="ef_infilter" ${inFilter ? 'checked' : ''}> Incluir en el filtro desplegable del sitio</label>
                </div>
                <div class="opma-form-actions">
                    <button class="opma-btn opma-btn-primary" id="ef_save">Guardar expansión</button>
                    <button class="opma-btn opma-btn-secondary" id="ef_cancel">Cancelar</button>
                </div>
            </div>
        `;

        document.getElementById('ef_save').addEventListener('click', saveExpansionForm);
        document.getElementById('ef_cancel').addEventListener('click', closeExpansionForm);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeExpansionForm() {
        editingExpansionSlug = null;
        document.getElementById('opmaExpansionForm').innerHTML = '';
    }

    function saveExpansionForm() {
        const newSlug = document.getElementById('ef_slug').value.trim();
        const name = document.getElementById('ef_name').value.trim();
        const inFilter = document.getElementById('ef_infilter').checked;

        if (!newSlug) { alert('La expansión necesita un slug.'); return; }
        if (!name) { alert('La expansión necesita un nombre visible.'); return; }
        if (newSlug !== editingExpansionSlug && expansionNames[newSlug] !== undefined) {
            alert('Ya existe una expansión con ese slug. Usa otro.');
            return;
        }

        // Si se editó y cambió el slug, quitamos la entrada/opción anterior
        if (editingExpansionSlug && editingExpansionSlug !== newSlug) {
            delete expansionNames[editingExpansionSlug];
            syncExpansionOption(editingExpansionSlug, null, false);
        }

        expansionNames[newSlug] = name;
        syncExpansionOption(newSlug, name, inFilter);

        saveDraft();
        closeExpansionForm();
        renderExpansionList();
    }

    /* ============================================================
       IMÁGENES LOCALES (carpeta / archivos del computador)
       ============================================================ */
    function getImageFolder() {
        let folder = (document.getElementById('opmaImageFolder') && document.getElementById('opmaImageFolder').value)
            || localStorage.getItem(FOLDER_KEY) || 'imagenes/productos/';
        folder = folder.trim().replace(/^\/+/, '');
        if (folder && !folder.endsWith('/')) folder += '/';
        return folder;
    }

    function sanitizeFileName(name) {
        const dot = name.lastIndexOf('.');
        const ext = dot > -1 ? name.slice(dot).toLowerCase() : '';
        const base = (dot > -1 ? name.slice(0, dot) : name)
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return (base || 'imagen') + ext;
    }

    function withSuffix(filename, n) {
        const dot = filename.lastIndexOf('.');
        if (dot === -1) return `${filename}-${n}`;
        return `${filename.slice(0, dot)}-${n}${filename.slice(dot)}`;
    }

    // Registra un File local y devuelve la ruta relativa que debe usarse en data.js
    function registerPendingImage(file) {
        const folder = getImageFolder();
        let filename = sanitizeFileName(file.name);
        let path = folder + filename;
        let n = 1;
        while (pendingImages.has(path)) {
            path = folder + withSuffix(filename, n);
            n++;
        }
        pendingImages.set(path, file);
        return path;
    }

    function appendPathToTextarea(textareaEl, path) {
        const lines = textareaEl.value.split('\n').map(s => s.trim()).filter(Boolean);
        if (!lines.includes(path)) lines.push(path);
        textareaEl.value = lines.join('\n');
    }

    function renderPreviewStrip(container, lines) {
        if (!lines.length) { container.innerHTML = ''; return; }
        container.innerHTML = lines.map(line => {
            const isPending = pendingImages.has(line);
            const src = isPending ? URL.createObjectURL(pendingImages.get(line)) : line;
            return `<div class="opma-preview-thumb" title="${escapeHtml(line)}">
                <img src="${src}" onerror="this.style.opacity=0.15">
                ${isPending ? '<div class="opma-pending-tag">pendiente</div>' : ''}
            </div>`;
        }).join('');
    }

    // Conecta un textarea de imágenes (multi-URL) con selector de archivos/carpeta local
    function wireImageTextarea(textareaEl, fileInputEl, folderInputEl, previewEl) {
        function refreshPreview() {
            const lines = textareaEl.value.split('\n').map(s => s.trim()).filter(Boolean);
            renderPreviewStrip(previewEl, lines);
        }
        function handleFiles(fileList) {
            Array.from(fileList).forEach(file => {
                if (!file.type.startsWith('image/')) return;
                const path = registerPendingImage(file);
                appendPathToTextarea(textareaEl, path);
            });
            refreshPreview();
        }
        fileInputEl.addEventListener('change', (e) => { handleFiles(e.target.files); e.target.value = ''; });
        if (folderInputEl) folderInputEl.addEventListener('change', (e) => { handleFiles(e.target.files); e.target.value = ''; });
        textareaEl.addEventListener('input', refreshPreview);
        refreshPreview();
    }

    // Conecta un input de texto simple (una sola imagen) con un selector de archivo
    function wireSingleImageInput(textInputEl, fileInputEl, previewImgEl) {
        function refreshPreview() {
            const val = textInputEl.value.trim();
            if (!val) { previewImgEl.style.display = 'none'; return; }
            previewImgEl.src = pendingImages.has(val) ? URL.createObjectURL(pendingImages.get(val)) : val;
            previewImgEl.style.display = 'inline-block';
        }
        fileInputEl.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            textInputEl.value = registerPendingImage(file);
            refreshPreview();
            e.target.value = '';
        });
        textInputEl.addEventListener('input', refreshPreview);
        refreshPreview();
    }

    function collectReferencedImagePaths() {
        const referenced = new Set();
        products.forEach(p => (p.images || []).forEach(img => referenced.add(img)));
        preorderBanners.forEach(b => {
            if (b.image) referenced.add(b.image);
            if (b.backgroundImage) referenced.add(b.backgroundImage);
            if (b.qrImage) referenced.add(b.qrImage);
        });
        return referenced;
    }

    function renderPendingImagesList() {
        const box = document.getElementById('opmaPendingImages');
        if (!box) return;
        if (pendingImages.size === 0) {
            box.innerHTML = '<div class="opma-empty">No has seleccionado imágenes locales todavía.</div>';
            return;
        }
        const referenced = collectReferencedImagePaths();
        box.innerHTML = Array.from(pendingImages.entries()).map(([path, file]) => `
            <div class="opma-item">
                <img src="${URL.createObjectURL(file)}">
                <div class="opma-item-info">
                    <strong>${escapeHtml(path)}</strong>
                    <span>${referenced.has(path) ? '✅ usada en el catálogo' : '⚠️ no está usada en ningún producto/banner todavía'}</span>
                </div>
                <div class="opma-item-actions">
                    <button class="opma-btn opma-btn-danger opma-btn-sm" data-removepending="${escapeHtml(path)}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');
        box.querySelectorAll('[data-removepending]').forEach(btn => {
            btn.addEventListener('click', () => {
                pendingImages.delete(btn.dataset.removepending);
                renderPendingImagesList();
            });
        });
    }

    let jsZipLoadPromise = null;
    function loadJSZip() {
        if (window.JSZip) return Promise.resolve();
        if (jsZipLoadPromise) return jsZipLoadPromise;
        jsZipLoadPromise = new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
            s.onload = resolve;
            s.onerror = () => reject(new Error('No se pudo cargar JSZip'));
            document.head.appendChild(s);
        });
        return jsZipLoadPromise;
    }

    async function downloadImagesZip() {
        if (pendingImages.size === 0) { alert('No hay imágenes locales pendientes de descargar.'); return; }
        try {
            await loadJSZip();
        } catch (e) {
            alert('No se pudo cargar la herramienta para comprimir imágenes. Revisa tu conexión a internet e intenta de nuevo.');
            return;
        }
        const zip = new JSZip();
        pendingImages.forEach((file, path) => zip.file(path, file));
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'imagenes-nuevas.zip';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    /* ============================================================
       CONSTRUCCIÓN DEL PANEL
       ============================================================ */
    function buildPanel() {
        const overlay = document.createElement('div');
        overlay.className = 'opma-overlay';
        overlay.id = 'opmaOverlay';
        overlay.innerHTML = `
            <div class="opma-panel">
                <div class="opma-header">
                    <div>
                        <h2><i class="fas fa-lock"></i> Panel de Administración</h2>
                        <small>Los cambios se aplican en tu navegador. Exporta al terminar y súbelo a GitHub.</small>
                    </div>
                    <button class="opma-close" id="opmaClose">&times;</button>
                </div>
                <div class="opma-tabs">
                    <button class="opma-tab active" data-tab="products">📦 Productos</button>
                    <button class="opma-tab" data-tab="banners">🖼️ Banners</button>
                    <button class="opma-tab" data-tab="expansions">🗂️ Expansiones</button>
                    <button class="opma-tab" data-tab="export">⬇️ Exportar</button>
                </div>
                <div class="opma-body">
                    <div class="opma-tabcontent active" id="opmaTabProducts">
                        <div class="opma-toolbar">
                            <input type="search" id="opmaProductSearch" placeholder="Buscar producto por nombre...">
                            <button class="opma-btn opma-btn-primary" id="opmaAddProduct">+ Nuevo producto</button>
                        </div>
                        <div id="opmaProductForm"></div>
                        <div class="opma-list" id="opmaProductList"></div>
                    </div>

                    <div class="opma-tabcontent" id="opmaTabBanners">
                        <div class="opma-toolbar">
                            <div style="flex:1;"></div>
                            <button class="opma-btn opma-btn-primary" id="opmaAddBanner">+ Nuevo banner</button>
                        </div>
                        <div id="opmaBannerForm"></div>
                        <div class="opma-list" id="opmaBannerList"></div>
                    </div>

                    <div class="opma-tabcontent" id="opmaTabExpansions">
                        <div class="opma-note"><i class="fas fa-circle-info"></i> Aquí defines el nombre visible de cada expansión y si aparece en el filtro desplegable del sitio. El slug es el valor que debes escribir en el campo "Expansión" al crear un producto.</div>
                        <div class="opma-toolbar">
                            <div style="flex:1;"></div>
                            <button class="opma-btn opma-btn-primary" id="opmaAddExpansion">+ Nueva expansión</button>
                        </div>
                        <div id="opmaExpansionForm"></div>
                        <div class="opma-list" id="opmaExpansionList"></div>
                    </div>

                    <div class="opma-tabcontent" id="opmaTabExport">
                        <div class="opma-export-box">
                            <div class="opma-note"><i class="fas fa-triangle-exclamation"></i> Esto NO sube nada automáticamente. Descarga <strong>data.js</strong> y, si agregaste imágenes locales, el <strong>.zip de imágenes</strong>; luego súbelos a tu repositorio de GitHub.</div>

                            <div class="opma-field">
                                <label>Carpeta destino para imágenes locales nuevas</label>
                                <input type="text" id="opmaImageFolder" placeholder="imagenes/productos/">
                                <small>Ruta relativa dentro de tu repositorio donde quedarán estas imágenes.</small>
                            </div>

                            <p id="opmaExportSummary">Sin cambios pendientes.</p>
                            <div class="opma-export-actions">
                                <button class="opma-btn opma-btn-primary" id="opmaDownload"><i class="fas fa-download"></i> Descargar data.js</button>
                                <button class="opma-btn opma-btn-secondary" id="opmaCopy"><i class="fas fa-copy"></i> Copiar código</button>
                                <button class="opma-btn opma-btn-secondary" id="opmaDownloadImgs"><i class="fas fa-file-zipper"></i> Descargar imágenes (.zip)</button>
                                <button class="opma-btn opma-btn-secondary" id="opmaCopyExpansions"><i class="fas fa-layer-group"></i> Copiar filtro de expansiones (HTML)</button>
                                <button class="opma-btn opma-btn-danger" id="opmaDiscard"><i class="fas fa-rotate-left"></i> Descartar cambios</button>
                            </div>
                            <p style="font-size:12px; opacity:0.7; margin-top:-8px;">El botón de expansiones copia el bloque de &lt;option&gt; para que reemplaces manualmente el &lt;select id="expansionFilter"&gt; en tu index.html (solo hace falta si agregaste o quitaste expansiones del filtro).</p>

                            <div class="opma-section-title">Imágenes locales seleccionadas</div>
                            <div class="opma-list" id="opmaPendingImages"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('#opmaClose').addEventListener('click', closePanel);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });

        overlay.querySelectorAll('.opma-tab').forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        });

        overlay.querySelector('#opmaAddProduct').addEventListener('click', () => openProductForm(null));
        overlay.querySelector('#opmaProductSearch').addEventListener('input', renderProductList);
        overlay.querySelector('#opmaAddBanner').addEventListener('click', () => openBannerForm(null));
        overlay.querySelector('#opmaAddExpansion').addEventListener('click', () => openExpansionForm(null));

        const folderInput = overlay.querySelector('#opmaImageFolder');
        folderInput.value = localStorage.getItem(FOLDER_KEY) || 'imagenes/productos/';
        folderInput.addEventListener('change', () => {
            try { localStorage.setItem(FOLDER_KEY, folderInput.value.trim()); } catch (e) {}
        });

        overlay.querySelector('#opmaDownload').addEventListener('click', downloadDataJs);
        overlay.querySelector('#opmaCopy').addEventListener('click', copyDataJs);
        overlay.querySelector('#opmaDownloadImgs').addEventListener('click', downloadImagesZip);
        overlay.querySelector('#opmaCopyExpansions').addEventListener('click', copyExpansionFilterHtml);
        overlay.querySelector('#opmaDiscard').addEventListener('click', discardChanges);

        panelBuilt = true;
    }

    function switchTab(name) {
        document.querySelectorAll('.opma-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
        document.querySelectorAll('.opma-tabcontent').forEach(c => c.classList.remove('active'));
        document.getElementById('opmaTab' + name.charAt(0).toUpperCase() + name.slice(1)).classList.add('active');
        if (name === 'expansions') renderExpansionList();
        if (name === 'export') { updateExportSummary(); renderPendingImagesList(); }
    }

    function updateExportSummary() {
        const el = document.getElementById('opmaExportSummary');
        el.textContent = `Listo para exportar: ${products.length} productos, ${preorderBanners.length} banners y ${pendingImages.size} imagen(es) local(es) pendiente(s).`;
    }

    /* ============================================================
       ABRIR / CERRAR
       ============================================================ */
    function openPanel() {
        if (!panelBuilt) buildPanel();
        maybeOfferDraftRestore();
        renderProductList();
        renderBannerList();
        renderExpansionList();
        document.getElementById('opmaOverlay').classList.add('open');
        isOpen = true;
    }

    function closePanel() {
        document.getElementById('opmaOverlay').classList.remove('open');
        isOpen = false;
        editingProductId = null;
        editingBannerId = null;
    }

    function maybeOfferDraftRestore() {
        try {
            const raw = localStorage.getItem(DRAFT_KEY);
            if (!raw) return;
            const draft = JSON.parse(raw);
            if (!draft || !draft.products) return;
            const sameCount = draft.products.length === products.length && draft.preorderBanners.length === preorderBanners.length;
            if (sameCount) return;
            const when = draft.savedAt ? new Date(draft.savedAt).toLocaleString('es-CO') : '';
            const restore = confirm(`Se encontró un borrador sin exportar (${when}). ¿Deseas restaurarlo?\n\nCancelar = seguir con los datos actuales de data.js.\n\nNota: las imágenes locales que hayas seleccionado en esa sesión no se guardan en el borrador y deberás volver a seleccionarlas.`);
            if (restore) {
                products.length = 0;
                draft.products.forEach(p => products.push(p));
                preorderBanners.length = 0;
                draft.preorderBanners.forEach(b => preorderBanners.push(b));
                if (draft.expansionNames) {
                    Object.keys(expansionNames).forEach(k => delete expansionNames[k]);
                    Object.keys(draft.expansionNames).forEach(k => {
                        expansionNames[k] = draft.expansionNames[k];
                        syncExpansionOption(k, draft.expansionNames[k], true);
                    });
                }
                refreshStorefront();
            }
        } catch (e) { /* ignorar borrador corrupto */ }
    }

    function discardChanges() {
        if (!confirm('Esto descartará todos los cambios sin exportar y recargará la página. ¿Continuar?')) return;
        localStorage.removeItem(DRAFT_KEY);
        location.reload();
    }

    /* ============================================================
       PRODUCTOS - LISTA
       ============================================================ */
    function renderProductList() {
        const list = document.getElementById('opmaProductList');
        const q = (document.getElementById('opmaProductSearch').value || '').toLowerCase().trim();
        const items = products.filter(p => !q || (p.name || '').toLowerCase().includes(q));

        if (items.length === 0) {
            list.innerHTML = '<div class="opma-empty">No hay productos que coincidan.</div>';
            return;
        }

        list.innerHTML = items.map(p => {
            const firstImg = (p.images && p.images[0]) || '';
            const src = pendingImages.has(firstImg) ? URL.createObjectURL(pendingImages.get(firstImg)) : firstImg;
            return `
            <div class="opma-item">
                <img src="${src}" onerror="this.style.opacity=0">
                <div class="opma-item-info">
                    <strong>${escapeHtml(p.name)}</strong>
                    <span>
                        <span class="opma-badge">${p.category}</span>
                        ${fmtPrice(p.price)} · ${p.stock}${p.promo ? ' · 🔥 promo' : ''}
                    </span>
                </div>
                <div class="opma-item-actions">
                    <button class="opma-btn opma-btn-secondary opma-btn-sm" data-edit="${p.id}"><i class="fas fa-pen"></i></button>
                    <button class="opma-btn opma-btn-danger opma-btn-sm" data-del="${p.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `; }).join('');

        list.querySelectorAll('[data-edit]').forEach(btn => {
            btn.addEventListener('click', () => openProductForm(Number(btn.dataset.edit)));
        });
        list.querySelectorAll('[data-del]').forEach(btn => {
            btn.addEventListener('click', () => deleteProduct(Number(btn.dataset.del)));
        });
    }

    function deleteProduct(id) {
        const p = products.find(p => p.id === id);
        if (!p) return;
        if (!confirm(`¿Borrar el producto "${p.name}"? Esta acción no se puede deshacer.`)) return;
        const idx = products.findIndex(p => p.id === id);
        products.splice(idx, 1);
        saveDraft();
        renderProductList();
        refreshStorefront();
    }

    /* ============================================================
       PRODUCTOS - FORMULARIO
       ============================================================ */
    function openProductForm(id) {
        editingProductId = id;
        const p = id ? products.find(p => p.id === id) : null;
        const isEdit = !!p;

        const expansionOptions = Array.from(new Set([
            ...Object.keys(expansionNames || {}),
            ...products.map(pr => pr.expansion).filter(Boolean)
        ]));

        const langsSelected = (p && p.language) || [];

        const container = document.getElementById('opmaProductForm');
        container.innerHTML = `
            <div class="opma-form">
                <h3>${isEdit ? 'Editar producto' : 'Nuevo producto'}</h3>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>Nombre</label>
                        <input type="text" id="pf_name" value="${escapeHtml(p ? p.name : '')}" placeholder="Ej: Booster Box Chaos Rising">
                    </div>
                    <div class="opma-field">
                        <label>Precio (COP)</label>
                        <input type="number" id="pf_price" min="0" step="1000" value="${p ? p.price : ''}" placeholder="Ej: 150000">
                    </div>
                </div>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>Categoría</label>
                        <select id="pf_category">
                            <option value="pokemon" ${p && p.category === 'pokemon' ? 'selected' : ''}>Pokémon TCG</option>
                            <option value="funko" ${p && p.category === 'funko' ? 'selected' : ''}>Funko Pop</option>
                            <option value="otros" ${p && p.category === 'otros' ? 'selected' : ''}>Otros</option>
                        </select>
                    </div>
                    <div class="opma-field">
                        <label>Expansión</label>
                        <input type="text" id="pf_expansion" list="pf_expansion_list" value="${escapeHtml(p ? p.expansion : '')}" placeholder="Ej: chaos-rising u 'otros'">
                        <datalist id="pf_expansion_list">
                            ${expansionOptions.map(e => `<option value="${escapeHtml(e)}">`).join('')}
                        </datalist>
                        <small>Debe coincidir con el valor usado en el filtro de expansión del sitio.</small>
                    </div>
                    <div class="opma-field">
                        <label>Disponibilidad</label>
                        <select id="pf_stock">
                            <option value="available" ${p && p.stock === 'available' ? 'selected' : ''}>En stock</option>
                            <option value="encargo" ${p && p.stock === 'encargo' ? 'selected' : ''}>Encargo</option>
                            <option value="soon" ${p && p.stock === 'soon' ? 'selected' : ''}>Próximamente</option>
                            <option value="agotado" ${p && p.stock === 'agotado' ? 'selected' : ''}>Agotado</option>
                        </select>
                    </div>
                </div>

                <div class="opma-field">
                    <label>Idioma(s)</label>
                    <div class="opma-checks">
                        <label class="opma-check"><input type="checkbox" id="pf_lang_es" ${langsSelected.includes('es') ? 'checked' : ''}> 🇪🇸 Español</label>
                        <label class="opma-check"><input type="checkbox" id="pf_lang_en" ${langsSelected.includes('en') ? 'checked' : ''}> 🇺🇸 Inglés</label>
                        <label class="opma-check"><input type="checkbox" id="pf_lang_jp" ${langsSelected.includes('jp') ? 'checked' : ''}> 🇯🇵 Japonés</label>
                        <label class="opma-check"><input type="checkbox" id="pf_lang_none" ${langsSelected.includes('') ? 'checked' : ''}> Sin idioma</label>
                    </div>
                </div>

                <div class="opma-field">
                    <label>Imágenes (una URL o ruta de archivo por línea, la primera es la principal)</label>
                    <textarea id="pf_images" rows="4" placeholder="https://... o imagenes/productos/foo.jpg">${(p && p.images ? p.images.join('\n') : '')}</textarea>
                    <div class="opma-img-tools">
                        <input type="file" id="pf_images_files" accept="image/*" multiple>
                        <input type="file" id="pf_images_folder" webkitdirectory directory multiple style="display:none;">
                        <button type="button" class="opma-btn opma-btn-secondary opma-btn-sm" id="pf_images_folder_btn">📁 Seleccionar carpeta</button>
                    </div>
                    <small>También puedes seleccionar imágenes o una carpeta completa desde tu computador; se guardan como pendientes hasta que descargues el .zip en la pestaña "Exportar".</small>
                    <div class="opma-preview-strip" id="pf_images_preview"></div>
                </div>

                <div class="opma-row">
                    <div class="opma-field">
                        <label>Cantidad disponible</label>
                        <input type="number" id="pf_cantidad" min="0" step="1" value="${p && p.cantidad !== undefined ? p.cantidad : 1}">
                    </div>
                    <div class="opma-field">
                        <label>Fecha de llegada (si es preventa)</label>
                        <input type="text" id="pf_arrivalDate" value="${escapeHtml(p && p.arrivalDate ? p.arrivalDate : '')}" placeholder="Ej: 5 de Junio, 2026">
                    </div>
                </div>

                <div class="opma-checks">
                    <label class="opma-check"><input type="checkbox" id="pf_promo" ${p && p.promo ? 'checked' : ''}> 🔥 En promoción</label>
                    <label class="opma-check"><input type="checkbox" id="pf_preorder" ${p && p.preorder ? 'checked' : ''}> Es preventa</label>
                </div>

                <div class="opma-form-actions">
                    <button class="opma-btn opma-btn-primary" id="pf_save">Guardar producto</button>
                    <button class="opma-btn opma-btn-secondary" id="pf_cancel">Cancelar</button>
                </div>
            </div>
        `;

        const imgTextarea = document.getElementById('pf_images');
        const imgFileInput = document.getElementById('pf_images_files');
        const imgFolderInput = document.getElementById('pf_images_folder');
        const imgPreview = document.getElementById('pf_images_preview');
        document.getElementById('pf_images_folder_btn').addEventListener('click', () => imgFolderInput.click());
        wireImageTextarea(imgTextarea, imgFileInput, imgFolderInput, imgPreview);

        document.getElementById('pf_save').addEventListener('click', saveProductForm);
        document.getElementById('pf_cancel').addEventListener('click', closeProductForm);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeProductForm() {
        editingProductId = null;
        document.getElementById('opmaProductForm').innerHTML = '';
    }

    function saveProductForm() {
        const name = document.getElementById('pf_name').value.trim();
        const price = Number(document.getElementById('pf_price').value) || 0;
        if (!name) { alert('El producto necesita un nombre.'); return; }

        const languages = [];
        if (document.getElementById('pf_lang_es').checked) languages.push('es');
        if (document.getElementById('pf_lang_en').checked) languages.push('en');
        if (document.getElementById('pf_lang_jp').checked) languages.push('jp');
        if (document.getElementById('pf_lang_none').checked) languages.push('');

        const images = document.getElementById('pf_images').value
            .split('\n').map(s => s.trim()).filter(Boolean);

        const cantidad = Number(document.getElementById('pf_cantidad').value) || 0;
        const arrivalDate = document.getElementById('pf_arrivalDate').value.trim();
        const isPreorder = document.getElementById('pf_preorder').checked;

        const data = {
            name,
            category: document.getElementById('pf_category').value,
            expansion: document.getElementById('pf_expansion').value.trim(),
            price,
            language: languages,
            images,
            stock: document.getElementById('pf_stock').value,
            promo: document.getElementById('pf_promo').checked,
            cantidad
        };
        if (isPreorder || arrivalDate) {
            data.preorder = isPreorder;
            if (arrivalDate) data.arrivalDate = arrivalDate;
        }

        if (editingProductId) {
            const idx = products.findIndex(p => p.id === editingProductId);
            if (idx > -1) products[idx] = { id: editingProductId, ...data };
        } else {
            products.push({ id: nextProductId(), ...data });
        }

        saveDraft();
        closeProductForm();
        renderProductList();
        refreshStorefront();
    }

    /* ============================================================
       BANNERS - LISTA
       ============================================================ */
    function renderBannerList() {
        const list = document.getElementById('opmaBannerList');
        if (preorderBanners.length === 0) {
            list.innerHTML = '<div class="opma-empty">No hay banners todavía.</div>';
            return;
        }
        list.innerHTML = preorderBanners.map(b => {
            const src = pendingImages.has(b.image) ? URL.createObjectURL(pendingImages.get(b.image)) : (b.image || '');
            return `
            <div class="opma-item">
                <img src="${src}" onerror="this.style.opacity=0">
                <div class="opma-item-info">
                    <strong>${escapeHtml(b.title)}</strong>
                    <span>
                        <span class="opma-badge">${b.active ? 'Activo' : 'Inactivo'}</span>
                        prioridad ${b.priority ?? '-'} · acción: ${b.action}
                    </span>
                </div>
                <div class="opma-item-actions">
                    <button class="opma-btn opma-btn-secondary opma-btn-sm" data-edit="${escapeHtml(b.id)}"><i class="fas fa-pen"></i></button>
                    <button class="opma-btn opma-btn-danger opma-btn-sm" data-del="${escapeHtml(b.id)}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `; }).join('');

        list.querySelectorAll('[data-edit]').forEach(btn => {
            btn.addEventListener('click', () => openBannerForm(btn.dataset.edit));
        });
        list.querySelectorAll('[data-del]').forEach(btn => {
            btn.addEventListener('click', () => deleteBanner(btn.dataset.del));
        });
    }

    function deleteBanner(id) {
        const b = preorderBanners.find(b => b.id === id);
        if (!b) return;
        if (!confirm(`¿Borrar el banner "${b.title}"?`)) return;
        const idx = preorderBanners.findIndex(b => b.id === id);
        preorderBanners.splice(idx, 1);
        saveDraft();
        renderBannerList();
        refreshStorefront();
    }

    /* ============================================================
       BANNERS - FORMULARIO
       ============================================================ */
    function openBannerForm(id) {
        editingBannerId = id;
        const b = id ? preorderBanners.find(b => b.id === id) : null;
        const isEdit = !!b;
        const action = b ? b.action : 'filter';

        const expansionOptions = Object.keys(expansionNames || {});

        const container = document.getElementById('opmaBannerForm');
        container.innerHTML = `
            <div class="opma-form">
                <h3>${isEdit ? 'Editar banner' : 'Nuevo banner'}</h3>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>ID único (sin espacios)</label>
                        <input type="text" id="bf_id" value="${escapeHtml(b ? b.id : '')}" placeholder="Ej: destined-rivals-preorder" ${isEdit ? 'disabled' : ''}>
                    </div>
                    <div class="opma-field">
                        <label>Prioridad (orden, menor = primero)</label>
                        <input type="number" id="bf_priority" value="${b && b.priority !== undefined ? b.priority : preorderBanners.length + 1}">
                    </div>
                </div>
                <div class="opma-field">
                    <label>Título</label>
                    <input type="text" id="bf_title" value="${escapeHtml(b ? b.title : '')}" placeholder="Ej: PREVENTA DESTINED RIVALS 🔥">
                </div>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>Subtítulo</label>
                        <input type="text" id="bf_subtitle" value="${escapeHtml(b ? b.subtitle : '')}">
                    </div>
                </div>
                <div class="opma-field">
                    <label>Descripción</label>
                    <textarea id="bf_description" rows="2">${escapeHtml(b ? b.description : '')}</textarea>
                </div>

                <div class="opma-row">
                    <div class="opma-field">
                        <label>Imagen (logo/ícono del banner)</label>
                        <input type="text" id="bf_image" value="${escapeHtml(b ? b.image : '')}" placeholder="https://... o imagenes/banners/foo.png">
                        <div class="opma-img-tools">
                            <input type="file" id="bf_image_file" accept="image/*">
                            <img class="opma-inline-preview" id="bf_image_preview">
                        </div>
                    </div>
                    <div class="opma-field">
                        <label>Imagen de fondo (opcional)</label>
                        <input type="text" id="bf_backgroundImage" value="${escapeHtml(b && b.backgroundImage ? b.backgroundImage : '')}" placeholder="https://... o imagenes/banners/fondo.jpg">
                        <div class="opma-img-tools">
                            <input type="file" id="bf_backgroundImage_file" accept="image/*">
                            <img class="opma-inline-preview" id="bf_backgroundImage_preview">
                        </div>
                    </div>
                </div>
                <div class="opma-row">
                    <div class="opma-field">
                        <label>Color de fondo (CSS, ej. gradiente)</label>
                        <input type="text" id="bf_bgColor" value="${escapeHtml(b && b.bgColor ? b.bgColor : '')}" placeholder="linear-gradient(135deg, #833ab4, #fd1d1d)">
                    </div>
                    <div class="opma-field">
                        <label>Degradado superpuesto (opcional)</label>
                        <input type="text" id="bf_overlayGradient" value="${escapeHtml(b && b.overlayGradient ? b.overlayGradient : '')}" placeholder="linear-gradient(...)">
                    </div>
                    <div class="opma-field">
                        <label>Color del texto</label>
                        <input type="color" id="bf_textColor" value="${b && b.textColor ? b.textColor : '#ffffff'}">
                    </div>
                </div>

                <div class="opma-field">
                    <label>Acción al hacer clic</label>
                    <select id="bf_action">
                        <option value="filter" ${action === 'filter' ? 'selected' : ''}>Filtrar productos por expansión</option>
                        <option value="link" ${action === 'link' ? 'selected' : ''}>Ir a un enlace externo</option>
                    </select>
                </div>

                <div class="opma-row" id="bf_filterFields">
                    <div class="opma-field">
                        <label>Expansión a filtrar</label>
                        <input type="text" id="bf_expansionFilter" list="bf_expansion_list" value="${escapeHtml(b && b.expansionFilter ? b.expansionFilter : '')}">
                        <datalist id="bf_expansion_list">${expansionOptions.map(e => `<option value="${escapeHtml(e)}">`).join('')}</datalist>
                    </div>
                </div>

                <div class="opma-row" id="bf_linkFields">
                    <div class="opma-field">
                        <label>Enlace (URL)</label>
                        <input type="text" id="bf_link" value="${escapeHtml(b && b.link ? b.link : '')}" placeholder="https://...">
                    </div>
                    <div class="opma-field">
                        <label>Imagen QR (opcional)</label>
                        <input type="text" id="bf_qrImage" value="${escapeHtml(b && b.qrImage ? b.qrImage : '')}" placeholder="qr-instagram.png">
                        <div class="opma-img-tools">
                            <input type="file" id="bf_qrImage_file" accept="image/*">
                            <img class="opma-inline-preview" id="bf_qrImage_preview">
                        </div>
                    </div>
                </div>

                <div class="opma-checks">
                    <label class="opma-check"><input type="checkbox" id="bf_active" ${!b || b.active ? 'checked' : ''}> Activo (visible en el sitio)</label>
                    <label class="opma-check"><input type="checkbox" id="bf_showQR" ${b && b.showQR ? 'checked' : ''}> Mostrar QR</label>
                    <label class="opma-check"><input type="checkbox" id="bf_isPreorder" ${b && b.isPreorder ? 'checked' : ''}> Es banner de preventa</label>
                </div>

                <div class="opma-row" id="bf_preorderFields">
                    <div class="opma-field">
                        <label>Fecha de llegada</label>
                        <input type="text" id="bf_arrivalDate" value="${escapeHtml(b && b.arrivalDate ? b.arrivalDate : '')}" placeholder="Ej: 5 de Junio, 2026">
                    </div>
                    <div class="opma-field">
                        <label>Texto del badge</label>
                        <input type="text" id="bf_preorderBadge" value="${escapeHtml(b && b.preorderBadge ? b.preorderBadge : 'PREVENTA')}">
                    </div>
                </div>

                <div class="opma-form-actions">
                    <button class="opma-btn opma-btn-primary" id="bf_save">Guardar banner</button>
                    <button class="opma-btn opma-btn-secondary" id="bf_cancel">Cancelar</button>
                </div>
            </div>
        `;

        function toggleActionFields() {
            const val = document.getElementById('bf_action').value;
            document.getElementById('bf_filterFields').classList.toggle('opma-hidden', val !== 'filter');
            document.getElementById('bf_linkFields').classList.toggle('opma-hidden', val !== 'link');
        }
        function togglePreorderFields() {
            document.getElementById('bf_preorderFields').classList.toggle('opma-hidden', !document.getElementById('bf_isPreorder').checked);
        }
        toggleActionFields();
        togglePreorderFields();
        document.getElementById('bf_action').addEventListener('change', toggleActionFields);
        document.getElementById('bf_isPreorder').addEventListener('change', togglePreorderFields);

        wireSingleImageInput(document.getElementById('bf_image'), document.getElementById('bf_image_file'), document.getElementById('bf_image_preview'));
        wireSingleImageInput(document.getElementById('bf_backgroundImage'), document.getElementById('bf_backgroundImage_file'), document.getElementById('bf_backgroundImage_preview'));
        wireSingleImageInput(document.getElementById('bf_qrImage'), document.getElementById('bf_qrImage_file'), document.getElementById('bf_qrImage_preview'));

        document.getElementById('bf_save').addEventListener('click', saveBannerForm);
        document.getElementById('bf_cancel').addEventListener('click', closeBannerForm);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closeBannerForm() {
        editingBannerId = null;
        document.getElementById('opmaBannerForm').innerHTML = '';
    }

    function saveBannerForm() {
        const id = editingBannerId || document.getElementById('bf_id').value.trim();
        const title = document.getElementById('bf_title').value.trim();
        if (!id) { alert('El banner necesita un ID único.'); return; }
        if (!title) { alert('El banner necesita un título.'); return; }
        if (!editingBannerId && preorderBanners.some(b => b.id === id)) {
            alert('Ya existe un banner con ese ID. Usa otro.');
            return;
        }

        const action = document.getElementById('bf_action').value;
        const isPreorder = document.getElementById('bf_isPreorder').checked;

        const data = {
            id,
            title,
            subtitle: document.getElementById('bf_subtitle').value.trim(),
            description: document.getElementById('bf_description').value.trim(),
            image: document.getElementById('bf_image').value.trim(),
            bgColor: document.getElementById('bf_bgColor').value.trim(),
            textColor: document.getElementById('bf_textColor').value,
            action,
            active: document.getElementById('bf_active').checked,
            priority: Number(document.getElementById('bf_priority').value) || 1
        };

        const backgroundImage = document.getElementById('bf_backgroundImage').value.trim();
        if (backgroundImage) data.backgroundImage = backgroundImage;
        const overlayGradient = document.getElementById('bf_overlayGradient').value.trim();
        if (overlayGradient) data.overlayGradient = overlayGradient;

        if (action === 'filter') {
            data.expansionFilter = document.getElementById('bf_expansionFilter').value.trim();
        } else {
            data.link = document.getElementById('bf_link').value.trim();
            data.showQR = document.getElementById('bf_showQR').checked;
            const qrImage = document.getElementById('bf_qrImage').value.trim();
            if (qrImage) data.qrImage = qrImage;
        }

        if (isPreorder) {
            data.isPreorder = true;
            data.arrivalDate = document.getElementById('bf_arrivalDate').value.trim();
            data.preorderBadge = document.getElementById('bf_preorderBadge').value.trim() || 'PREVENTA';
        }

        if (editingBannerId) {
            const idx = preorderBanners.findIndex(b => b.id === editingBannerId);
            if (idx > -1) preorderBanners[idx] = data;
        } else {
            preorderBanners.push(data);
        }

        saveDraft();
        closeBannerForm();
        renderBannerList();
        refreshStorefront();
    }

    /* ============================================================
       EXPORTAR data.js
       ============================================================ */
    function downloadDataJs() {
        const content = generateDataJs();
        const blob = new Blob([content], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'data.js';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async function copyDataJs() {
        const content = generateDataJs();
        try {
            await navigator.clipboard.writeText(content);
            alert('¡Código copiado! Pégalo en tu data.js.');
        } catch (e) {
            alert('No se pudo copiar automáticamente. Usa el botón de descarga en su lugar.');
        }
    }

    /* ============================================================
       ACTIVACIÓN: escribir "admin" o Ctrl+Alt+A
       ============================================================ */
    let keyBuffer = '';
    document.addEventListener('keydown', (e) => {
        const tag = (document.activeElement && document.activeElement.tagName || '').toLowerCase();
        const editable = tag === 'input' || tag === 'textarea' || tag === 'select' || (document.activeElement && document.activeElement.isContentEditable);

        if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            openPanel();
            return;
        }

        if (editable || isOpen) return;
        if (e.key.length !== 1) return;

        keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-5);
        if (keyBuffer === 'admin') {
            keyBuffer = '';
            openPanel();
        }
    });

    injectStyles();
})();
