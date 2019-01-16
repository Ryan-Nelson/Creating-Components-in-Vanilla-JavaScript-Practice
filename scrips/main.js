
const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}

const h1 = element("h1", "Generic Component Maker", "xx-large orange")

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}
//arguments name sectioncontent info

const pstudent = (...studentStuff) => {
    // studentStuff = ["name", "clazz", "info"]
    return `
        <div id="student">
            ${h1(studentStuff[0], "xx-large")}
            ${section(studentStuff[1], "gold")}
            ${aside(studentStuff[2], "pushRight")}
        </div>
    `
}

const studentzzz = (name, sectionContent, info) => {
    return `
        <div id="student">
            ${h1(name, "xx-large")}
            ${section(sectionContent, "gold")}
            ${aside(info, "pushRight")}
        </div>
    `
}

for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent += pstudent(student.name, student.clazz, student.info)
    } else {
        studentComponent += ""
    }
    document.getElementById("container").innerHTML += studentComponent
}
