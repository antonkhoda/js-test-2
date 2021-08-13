$(document).ready(() => {
  $("#b-text").click(function () {
    if ($("main").hasClass("b-text")) {
      $("main").removeClass("b-text");
    } else {
      $("main").addClass("b-text");
    }
  });

  $("#i-text").click(function () {
    if ($("main").hasClass("i-text")) {
      $("main").removeClass("i-text");
    } else {
      $("main").addClass("i-text");
    }
  });

  $("#u-text").click(function () {
    if ($("main").hasClass("u-text")) {
      $("main").removeClass("u-text");
    } else if ($("main").hasClass("s-text")) {
      $("main").removeClass("s-text");
      $("main").addClass("u-text");
    } else {
      $("main").addClass("u-text");
    }
  });

  $("#s-text").click(function () {
    if ($("main").hasClass("s-text")) {
      $("main").removeClass("s-text");
    } else if ($("main").hasClass("u-text")) {
      $("main").removeClass("u-text");
      $("main").addClass("s-text");
    } else {
      $("main").addClass("s-text");
    }
  });

  $("#left-text").click(function () {
    if ($("main").hasClass("center-text")) {
      $("main").removeClass("center-text");
      $("main").addClass("left-text");
    } else if ($("main").hasClass("right-text")) {
      $("main").removeClass("right-text");
      $("main").addClass("left-text");
    } else {
      $("main").addClass("left-text");
    }
  });

  $("#center-text").click(function () {
    if ($("main").hasClass("left-text")) {
      $("main").removeClass("left-text");
      $("main").addClass("center-text");
    } else if ($("main").hasClass("right-text")) {
      $("main").removeClass("right-text");
      $("main").addClass("center-text");
    } else {
      $("main").addClass("center-text");
    }
  });

  $("#right-text").click(function () {
    if ($("main").hasClass("left-text")) {
      $("main").removeClass("left-text");
      $("main").addClass("right-text");
    } else if ($("main").hasClass("center-text")) {
      $("main").removeClass("center-text");
      $("main").addClass("right-text");
    } else {
      $("main").addClass("right-text");
    }
  });

  let fontFamilyArr = [
    "Arial",
    "Georgia",
    "Impact",
    "Tahoma",
    "Times Nex Roman",
    "Verdana",
  ];

  fontFamilyArr.forEach((element) => {
    $("#font-text").append(
      `<option value="${element}" style="font-family:${element}">${element}</option>`
    );
  });

  $("#font-text").change(function () {
    $("main").css("fontFamily", $("#font-text").val());
  });

  let fontSizeArr = ["12", "14", "16", "18", "20", "22", "25", "30"];

  fontSizeArr.forEach((element) => {
    $("#font-size").append(
      `<option value="${element}" style="font-size:${element}px">${element}px</option>`
    );
  });

  $("#font-size").change(function () {
    $("main").css("fontSize", `${$("#font-size").val()}px`);
  });

  let paletteColors = [
    "#11af9e",
    "#0f9688",
    "#26bc72",
    "#21a163",
    "#2e97e2",
    "#257fbd",
    "#a16aba",
    "#9556b1",
    "#344b60",
    "#2b4051",
    "#fbc30b",
    "#fea10f",
    "#f38820",
    "#e06100",
    "#f8603e",
    "#cd4a29",
    "#eaefef",
    "#c1c7c9",
    "#96a8a8",
    "#829090",
    "#000000",
  ];

  paletteColors.forEach((element) => {
    $("#palette").append(
      `<div class="palette-item" style="background-color:${element}"></div>`
    );
  });

  $("#color-text").click(function () {
    $("#menu-font-color").css("display", "block");
  });

  $("#close-menu-font-color").click(function () {
    $("#menu-font-color").css("display", "none");
  });

  $("#palette").click(function (event) {
    let el = event.target.style.backgroundColor;
    if (el) {
      $("main").css("color", el);
    }
  });

  paletteColors.forEach((element) => {
    $("#menu-bg-palette").append(
      `<div class="palette-item" style="background-color:${element}"></div>`
    );
  });

  let bgImage = [
    "https://babr24.com/n2p/i/2019/5/pp_11220514.jpg",
    "https://babr24.com/n2p/i/2019/5/yalisfnbm_11220420.jpg",
    "https://babr24.com/n2p/i/2019/5/lovs_11220333.jpg",
    "https://babr24.com/n2p/i/2019/5/isa_11220249.jpg",
    "https://allpainters.ru/wp-content/uploads/2014/09/salvador-dali-the-swallows-tail.jpg",
    "https://babr24.com/n2p/i/2019/5/gdnrntc_11220559.jpg",
    "https://babr24.com/n2p/i/2019/5/zg_11220211.jpg",
    "https://babr24.com/n2p/i/2019/5/lovs_11220333.jpg",
  ];

  bgImage.forEach((element) => {
    $("#menu-bg-image").append(
      `<div class="image-item" style="background: url(${element})"></div>`
    );
  });

  $("#menu-bg-image").click(function (event) {
    let el = event.target.style.background;
    if (el) {
      $("body").css("background", el);
    }
  });

  $("#menu-bg-palette").click(function (event) {
    let el = event.target.style.backgroundColor;
    if (el) {
      $("body").css("background", el);
    }
  });

  $("#menu-bg-image-link-brouse").change(function () {
    var file = this.files;
    $("body").css("background", `url(${URL.createObjectURL(file[0])})`);
  });

  $("#menu-bg-image-link-enter").click(function () {
    let test1 = /https:\/\/[a-zA-Z0-9\/_\.-]+\.jpg/;
    let test2 = /https:\/\/[a-zA-Z0-9\/_\.-]+\.jpeg/;
    let test3 = /https:\/\/[a-zA-Z0-9\/_\.-]+\.png/;
    let link = $("#menu-bg-image-link-text").val();
    if (test1.test(link) || test2.test(link) || test3.test(link)) {
      $("body").css("background", `url(${link})`);
      $("#menu-bg-image-link-text").removeClass("red");
    } else {
      $("#menu-bg-image-link-text").addClass("red");
    }
    $("#menu-bg-image-link-text").val(null);
  });

  $("#menu-bg-items").click(function (event) {
    $("#menu-bg-color-choose").removeClass("menu-bg-item-is-active");
    $("#menu-bg-images").removeClass("menu-bg-item-is-active");
    $("#menu-bg-files").removeClass("menu-bg-item-is-active");
    $("#menu-bg-palette").css("display", "none");
    $("#menu-bg-image").css("display", "none");
    $("#menu-bg-image-link").css("display", "none");
    let el = $(event.target).text();
    if (el == "Color") {
      $("#menu-bg-palette").css("display", "flex");
      $("#menu-bg-color-choose").addClass("menu-bg-item-is-active");
    } else if (el == "Images") {
      $("#menu-bg-image").css("display", "flex");
      $("#menu-bg-images").addClass("menu-bg-item-is-active");
    } else if (el == "Files") {
      $("#menu-bg-image-link").css("display", "flex");
      $("#menu-bg-files").addClass("menu-bg-item-is-active");
    }
  });

  $("#bg-text").click(function () {
    $("#menu-bg-color").css("display", "block");
  });

  $("#close-menu-bg-color").click(function () {
    $("#menu-bg-color").css("display", "none");
    $("#menu-bg-image-link-text").removeClass("red");
  });

  $("#menu-registration-button").click(function () {
    let loginCheck = /\w{1,20}/;
    let passwordCheck = /^\w{5,15}$/;
    let login = $("#menu-registration-login").val();
    let password = $("#menu-registration-password").val();
    if (!loginCheck.test(login)) {
      $("#menu-registration-login").addClass("red");
    } else if (loginCheck.test(login)) {
      $("#menu-registration-login").removeClass("red");
    }

    if (!passwordCheck.test(password)) {
      $("#menu-registration-password").addClass("red");
    } else if (passwordCheck.test(password)) {
      $("#menu-registration-password").removeClass("red");
    }

    if (passwordCheck.test(password) && loginCheck.test(login)) {
      $("#redactor").prop("disabled", false);
      $("#menu-registration").css("display", "none");
      $("#menu-registration-login").removeClass("red");
      $("#menu-registration-password").removeClass("red");
      $("#menu-registration-login").val(null);
      $("#menu-registration-password").val(null);
      $("#lock-open").css("display", "block");
      $("#lock").css("display", "none");
    }
  });

  $("#login").click(function () {
    $("#menu-registration").css("display", "block");
  });

  $("#close-menu-registration").click(function () {
    $("#menu-registration").css("display", "none");
    $("#menu-registration-login").val(null);
    $("#menu-registration-password").val(null);
    $("#menu-registration-login").removeClass("red");
    $("#menu-registration-password").removeClass("red");
  });

  $("#redactor").click(function () {
    $("#redactor-header").css("display", "flex");
    $("#main-header").css("display", "none");
    $("#textarea").css("display", "block");
    $("main").css("display", "none");
    $("#textarea textarea").val($("main").html());
  });

  $("#redactor-save").click(function () {
    $("#redactor-header").css("display", "none");
    $("#main-header").css("display", "flex");
    $("#textarea").css("display", "none");
    $("main").css("display", "block");
    $("main").html($("#textarea textarea").val());
  });

  $("#redactor-table").click(function () {
    $("#menu-table").css("display", "block");
  });

  $("#close-menu-table").click(function () {
    $("#menu-table").css("display", "none");
    $(document.forms.table).trigger("reset");
  });

  let numbersCheck = /\d+/;

  $("#table-create").click(function () {
    let form = document.forms.table;
    if (numbersCheck.test(form.countTr.value) && form.countTr.value > 0) {
      $(form.countTr).removeClass("red");
    } else {
      $(form.countTr).addClass("red");
    }
    if (numbersCheck.test(form.countTd.value) && form.countTd.value > 0) {
      $(form.countTd).removeClass("red");
    } else {
      $(form.countTd).addClass("red");
    }
    if (numbersCheck.test(form.widthTd.value) && form.widthTd.value > 0) {
      $(form.widthTd).removeClass("red");
    } else {
      $(form.widthTd).addClass("red");
    }
    if (numbersCheck.test(form.heightTd.value) && form.heightTd.value > 0) {
      $(form.heightTd).removeClass("red");
    } else {
      $(form.heightTd).addClass("red");
    }
    if (
      numbersCheck.test(form.widthTableBorder.value) &&
      form.widthTableBorder.value > 0
    ) {
      $(form.widthTableBorder).removeClass("red");
    } else {
      $(form.widthTableBorder).addClass("red");
    }
    if (form.styleTableBorder.value != "choose style") {
      $(form.styleTableBorder).removeClass("red");
    } else {
      $(form.styleTableBorder).addClass("red");
    }
    if (form.colorTableBorder.value != "choose style") {
      $(form.colorTableBorder).removeClass("red");
    } else {
      $(form.colorTableBorder).addClass("red");
    }
    if (
      numbersCheck.test(form.countTr.value) &&
      form.countTr.value > 0 &&
      numbersCheck.test(form.countTd.value) &&
      form.countTd.value > 0 &&
      numbersCheck.test(form.widthTd.value) &&
      form.widthTd.value > 0 &&
      numbersCheck.test(form.heightTd.value) &&
      form.heightTd.value > 0 &&
      numbersCheck.test(form.widthTableBorder.value) &&
      form.widthTableBorder.value > 0 &&
      form.styleTableBorder.value != "choose style" &&
      form.colorTableBorder.value != "choose style"
    ) {
      $("#textarea textarea").val($("#textarea textarea").val() + "<table>");
      for (i = 0; i < form.countTr.value; i++) {
        $("#textarea textarea").val($("#textarea textarea").val() + "<tr>");
        for (j = 0; j < form.countTd.value; j++) {
          $("#textarea textarea").val(
            $("#textarea textarea").val() +
              `<td style="width:${form.widthTd.value}px; height:${form.heightTd.value}px; border: ${form.widthTableBorder.value}px ${form.styleTableBorder.value} ${form.colorTableBorder.value}">TD</td>`
          );
        }
        $("#textarea textarea").val($("#textarea textarea").val() + "</tr>");
      }
      $("#textarea textarea").val($("#textarea textarea").val() + "</table>");
    }
  });

  $("#table-reset").click(function () {
    $(document.forms.table).trigger("reset");
  });

  $("#redactor-list-ol").click(function () {
    $("#menu-list-ol").css("display", "block");
  });

  $("#close-menu-list-ol").click(function () {
    $("#menu-list-ol").css("display", "none");
    $(document.forms.listOl).trigger("reset");
  });

  $("#ListOl-create").click(function () {
    let form = document.forms.listOl;
    if (numbersCheck.test(form.countLiOl.value) && form.countLiOl.value > 0) {
      $(form.countLiOl).removeClass("red");
    } else {
      $(form.countLiOl).addClass("red");
    }
    if (form.styleListOlMark.value != "choose type") {
      $(form.styleListOlMark).removeClass("red");
    } else {
      $(form.styleListOlMark).addClass("red");
    }
    if (
      numbersCheck.test(form.countLiOl.value) &&
      form.countLiOl.value > 0 &&
      form.styleListOlMark.value != "choose type"
    ) {
      $("#textarea textarea").val(
        $("#textarea textarea").val() +
          `<ol style="list-style-type: ${form.styleListOlMark.value}">`
      );
      for (i = 1; i <= form.countLiOl.value; i++) {
        $("#textarea textarea").val(
          $("#textarea textarea").val() + `<li>Ol item ${i}</li>`
        );
      }
      $("#textarea textarea").val($("#textarea textarea").val() + "</ol>");
    }
  });

  $("#ListOl-reset").click(function () {
    $(document.forms.listOl).trigger("reset");
  });

  $("#redactor-list-ul").click(function () {
    $("#menu-list-ul").css("display", "block");
  });

  $("#close-menu-list-ul").click(function () {
    $("#menu-list-ul").css("display", "none");
    $(document.forms.listUl).trigger("reset");
  });

  $("#ListUl-create").click(function () {
    let form = document.forms.listUl;
    if (numbersCheck.test(form.countLiUl.value) && form.countLiUl.value > 0) {
      $(form.countLiUl).removeClass("red");
    } else {
      $(form.countLiUl).addClass("red");
    }
    if (form.styleListUlMark.value != "choose type") {
      $(form.styleListUlMark).removeClass("red");
    } else {
      $(form.styleListUlMark).addClass("red");
    }
    if (
      numbersCheck.test(form.countLiUl.value) &&
      form.countLiUl.value > 0 &&
      form.styleListUlMark.value != "choose type"
    ) {
      $("#textarea textarea").val(
        $("#textarea textarea").val() +
          `<ul style="list-style-type: ${form.styleListUlMark.value}">`
      );
      for (i = 1; i <= form.countLiUl.value; i++) {
        $("#textarea textarea").val(
          $("#textarea textarea").val() + `<li>Ul item ${i}</li>`
        );
      }
      $("#textarea textarea").val($("#textarea textarea").val() + "</ul>");
    }
  });

  $("#ListUl-reset").click(function () {
    $(document.forms.listUl).trigger("reset");
  });
});
