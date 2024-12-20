fetch("https://jsonplaceholder.typicode.com/posts")
.then(tab=>tab.json())
.then(tab=>{
    root.innerHTML = tab.map((e)=>{
        return(
            `<table>
                 <tr>
                     <td>${e.userId}</td>
                     <td>${e.id}</td>
                     <td>${e.title}</td>
                     <td>${e.body}</td>
                 <tr>
             </table>
            `
        )
    }).join("")
})