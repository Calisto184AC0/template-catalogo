import font from './font'
import jsPDF from 'jspdf'

const createPDF = visualizadorRef => {
    const doc = new jsPDF('l', 'px', [1920, 1080])
    doc.setFillColor(242, 242, 242)
    doc.rect(0, 0, 1920, 1080, 'F')

    const logo = new Image()
    logo.src = '/logo.png'

    doc.addImage(logo, 'png', 52, 50, 128, 40.63)

    doc.setFontSize(24)
    doc.addFileToVFS('Poppins-Regular.ttf', font)
    doc.addFont('Poppins-Regular.ttf', 'Poppins-Regular', 'normal')
    doc.setFont('Poppins-Regular')

    doc.text(
        `DOLCKER SISTEMAS, S.L.
Calle Talamanca del Jarama, 19
28051 Madrid (España)
(+34) 902 363 725

administracion@dolcker.es
comercial@dolcker.es
dolcker@dolcker.es
sistemas@dolcker.es`,
        52,
        770
    )

    const children = visualizadorRef.current.children

    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName === 'IMG' && children[i].currentSrc !== '') {
            const imgAux = new Image()
            imgAux.src = children[i].src

            console.log(children[i])

            doc.addImage(imgAux, 'png', 664, 163, 1200, 830, '', 'FAST')
        }
    }

    doc.save('Dolcker.pdf')
}

export default createPDF
