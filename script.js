
function cariProperti() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const listings = document.getElementById("listings");
  const properties = listings.getElementsByClassName("property");

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
    const title = property.getElementsByTagName("h2")[0].innerText.toLowerCase();
    const lokasiProperti = property.getAttribute("data-lokasi").toLowerCase();
    const cocokKeyword = title.includes(keyword) || lokasiProperti.includes(keyword);

    if (cocokKeyword || keyword === "") {
      property.style.display = "block";
    } else {
      property.style.display = "none";
    }
  }
}
