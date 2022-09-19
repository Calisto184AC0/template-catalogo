const downloadImgImport = import.meta.globEager('../assets/images/Descargas/**')

const downloadImgSrc = {}

for (const path in downloadImgImport) {
    const nameFile = path.match(/[\w\-_ ]+(?=\.)/gm)[0] // coger solo el nombre de todos los archivos !no poner acentos ni simbolos raros

    downloadImgSrc[nameFile] = downloadImgImport[path].default
}

const configDescargas = [
    {
        path: '/downloads/Catalogo general Dolcker.pdf',
        imgSrc: downloadImgSrc['Catalogo general Dolcker'],
        title: 'Catálogo general',
        fileName: 'Dolcker',
        fileType: 'pdf',
        size: '8,4 MB',
    },
    {
        path: '/downloads/Sistema Dolcker clip.pdf',
        imgSrc: downloadImgSrc['portada dolckerclip'],
        title: 'Sistemas',
        fileName: 'Dolcker & Clip',
        fileType: 'pdf',
        size: '6,2 MB',
    },
    {
        path: '/downloads/Sistema DOTC11.pdf',
        imgSrc: downloadImgSrc['Sistema DOTC11_Pagina_01'],
        title: 'Sistemas',
        fileName: 'DOL - TC11',
        fileType: 'pdf',
        size: '6,3 MB',
    },
    {
        path: '/downloads/Sistema DOTC14.pdf',
        imgSrc: downloadImgSrc['Sistema DOTC14_Pagina_01'],
        title: 'Sistemas',
        fileName: 'DOL - TC14',
        fileType: 'pdf',
        size: '5,7 MB',
    },
    {
        path: '/downloads/Sistema DOHC20.pdf',
        imgSrc: downloadImgSrc['portada DOHC20'],
        title: 'Sistemas',
        fileName: 'DOL - HC20',
        fileType: 'pdf',
        size: '5,5 MB',
    },
]

export default configDescargas
