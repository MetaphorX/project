export default{
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name: "title",
            title: "Title",
            type: "string"
            
        },
        {
            name: "pdfFile",
            title: "PDF File",
            type: "file",
            options:{
                accept: ".pdf"
            },
            validation: (Rule) => Rule.required()

        },
        {
            name: "department",
            title: "Department",
            type: "string"
        },
        {
            name: "abstract",
            title: "Abstract",
            type: "string"
        },
        {
            name: "supervisedBy",
            title: "Supervised By",
            type: "string"
        },
        {
            name: "projectLink",
            title: "Project Link",
            type: "string"
        },
    ]
}