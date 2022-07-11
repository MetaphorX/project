export const searchQuery = (searchTerm)=> {
    const query = `*[_type== "project" && title match '${searchTerm}*' || department match '${searchTerm}*' || about match '${searchTerm}*']{
        title,
        _id,
        supervisedBy
    }`

    return query
}

export const feedQuery = `*[_type == 'project'] | order(_createdAt desc){
    title,
    _id,
    supervisedBy,
    department,
    abstract
}`

export const pdfQuery = `*[_type == 'project'] | order(_createdAt desc){
    _id,
    pdfFile
}`