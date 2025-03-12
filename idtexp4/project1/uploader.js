// File Uploader functionality
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const previewArea = document.getElementById('preview');
const browseLink = document.querySelector('.browse-link');

const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/jpg'
];

function handleFile(file) {
    if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload PDF, DOC, DOCX, or JPG/JPEG files only.');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        previewArea.innerHTML = '';
        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';

        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewItem.appendChild(img);
        }

        const fileInfo = document.createElement('div');
        fileInfo.innerHTML = `
            <p><strong>File:</strong> ${file.name}</p>
            <p><strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
            <p><strong>Type:</strong> ${file.type}</p>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = clearPreview;

        previewItem.appendChild(fileInfo);
        previewItem.appendChild(removeBtn);
        previewArea.appendChild(previewItem);
    };

    reader.readAsDataURL(file);
}

function clearPreview() {
    previewArea.innerHTML = '';
    fileInput.value = '';
}

// Drag and drop handlers
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

// Click to upload
browseLink.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});