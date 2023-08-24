async function getData() {
    const data = await fetch('produk.json')
      .then(res => res.json())
    console.log('test A')
    return data
  }
  
  const run = async () => {
    const contentData = await getData()
    console.log(contentData)
    console.log('test B')
  
    const table = document.querySelector('div.content')
  
    // console.log(table)
    for (let i = 0; i < contentData.length; i++) {
      table.innerHTML += `
      <div class="row">
            <div class="row-img">
            <img src="${contentData[i].image}" />
        </div>
        <h5>${contentData[i].title}<h5>
        <h5>${contentData[i].type}<h6>
        <h6>${contentData[i].price}<h6>
        <div class="ratings">
                <a href="#"><i class='bx bxs-star' ></i></a>
                <a href="#"><i class='bx bxs-star' ></i></a>
                <a href="#"><i class='bx bxs-star' ></i></a>
                <a href="#"><i class='bx bxs-star' ></i></a>
                <a href="#"><i class='bx bxs-star-half' ></i></a>
            </div>
      </div>      `
    }
  }
  let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark');
    }
}
  
  run()
  