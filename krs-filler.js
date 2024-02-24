// Add KRS Automation Script For Siakad Version 1.2.0

// Make funtion add_krs to add the course to the KRS.
function add_krs(id) {
  // Make Variable URL to the SIAKAD system.
  var url = "https://siakad.unj.ac.id/isi_krs/tambahMK";
  // Make Variable button for the SIAKAD system.
  var button = "#btnTambah_" + id;

  // Fetch the response from the SIAKAD system.
  fetch(url + "/" + id)
    .then(response => response.json())
    .then(data => {
      // If the status of the response is false, alert the message.
      if (data.status == false) {
        alert(data.pesan);
      } else {
        // If the status of the response is true, alert the message and disable the button.
        alert(data.pesan);
        $(button).text('KRS');
        $(button).attr('disabled', true);
      }
    })
    .catch(error => {
      // If there is an error in fetching the data, alert an error message.
      alert('Error Kesalahan data');
    });
}

// An array of course ids.
var idKrs = [ '196609',   //1000000350 - Logika dan Penalaran Ilmiah
	            '197280',   //1512600027 - Interaksi Manusia Dan Komputer	
	            '197289',   //1512600030 - Perencanaan Pembelajaran
	            '197294',   //1512600033 - Sistem Operasi
	            '197142',   //1512600003 - Basis Data
	            '197299',   //1512600036 - Sistem Multimedia
	            '197305',   //1512600039 - Kecerdasan Buatan
	            '201035'];  //1512600060 - Analisis dan Perencangan Sistem

// For each course idKrs in the array, call the add_krs function.
idKrs.forEach(id => {
  add_krs(id);
});
