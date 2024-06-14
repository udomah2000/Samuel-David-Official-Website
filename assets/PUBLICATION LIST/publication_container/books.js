
const book = [
    {
        id: 1,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: ` Alfred, M. A. and Udo, S. D. (2020).`,
        body: ` Administration and Supervision of vocational
        Education: The Nigeria Perspective. Uyo: Book of Readings in Vocational
        Education Administration and Supervision, 5:29-51`,
        download: `<a href="/assets/PUBLICATION LIST/pdf/Administration and Supervision of Vocational Eduaction.pdf" download="/assets/PUBLICATION LIST/pdf/Administration and Supervision of Vocational Eduaction.pdf" class="custom-btn btn obj-display-none">Download</a>`
    },
     {
        id: 2,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: `Usoro, E. B., Akpan, N. A., Udo, S. D., and Usen, S. M. (2020). `,
        body: `  Mentoring of Business
        Education undergraduate students through the utilization of functional facilities for
        skill acquisition in the University of Uyo. Mentorship and Excellence in Life. A
        Festschrift in honour of Mother Mary Charles Magdalen Walker RSC (1881-1966).
        156-168, Uyo`,
        download: `<a href="/assets/PUBLICATION LIST/pdf/Mentoring of Business Education Undergraduate.pdf" download="/assets/PUBLICATION LIST/pdf/Mentoring of Business Education Undergraduate.pdf" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 3,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: `Udo, S. D., Alice, J. U., and Queen-Esther, E. O. (2020). `,
        body: ` Impact of COVID-19 Pandemic
        on Economy and Higher Education in Nigeria In Developing Alternative Teaching
        Continuity Plan to move Classrooms online at COVID-19 era in Nigeria. Uyo:
        Benchmark Educational Services, p89-98. Uyo`,
        download: `<a href="/assets/PUBLICATION LIST/pdf/Impact of Covid-19 Pandemic on Economy and Higher Education.pdf" download="/assets/PUBLICATION LIST/pdf/Impact of Covid-19 Pandemic on Economy and Higher Education.pdf" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 4,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: `Umoeka, E., Udo, S. D., Sampson, A., and Umoh, E. T (2022). `,
        body: `   Entrepreneurial
        Education: A tool for job creation as perceived in Nigerian Undergraduates.
        Entrepreneurship Education in Nigeria: issues, challenges and prospects. Uyo:
        Amida Ventures, p288-296.`,
        download: `<a href="/assets/PUBLICATION LIST/pdf/Enterpreneurial Education - A Tool.pdf" download="/assets/PUBLICATION LIST/pdf/Enterpreneurial Education - A Tool.pdf" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 5,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: `Undie, S. B., and Udo, S. D. (2023). `,
        body: `  Promoting E-Learning in Business Education
        beyond the era of COVID-19 Pandemic in Nigeria. Contemporary Discourse on
        Nigeria’s Economic Profile. A Festschrift in honour of Professor Nyaudoh
        Ukpabio Ndaeyo, p642-649.`,
        download: `<a href="/assets/PUBLICATION LIST/pdf/Promoting E-Learning in Business Education.pdf" download="/assets/PUBLICATION LIST/pdf/Promoting E-Learning in Business Education.pdf" class="custom-btn btn obj-display-none">Download</a>`
    },
    {
        id: 6,
        img:`../../../assets/images/bk-cover-8.jpg`,
        title: `Udo, S. D. and Akpanobong, U. E. (2018). `,
        body: `  Accounting Competencies and Self Efficacy
        of Teachers. Mauritius: Lambert Academic publishing`,
        download: `<a href="#" download="#" class="custom-btn btn obj-display-none">Download</a>`
    },
    
]



const loadBook = () => {
    let bookContainer = document.querySelector('.bookEle');
    let displayBookData = ''
    book.map((bookData) => {
        const {img,  title, body, download } = bookData;
        displayBookData += `
        <div class="col-lg-4 mb3">
        <div class="trainer-item">
            <div class="image-thumb">
                <img src="${img}" alt="">
            </div>
            <div class="down-content">
                <h4>${title}</h4>
                <p>${body}</p>
                <div class="main-button scroll-to-section offset-lg-3" >
                  <p>${download}</p>
              </div>
            </div>
        </div>
    </div>
        `
       bookContainer.innerHTML = displayBookData;
    })
}
loadBook()





