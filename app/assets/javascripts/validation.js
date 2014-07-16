function crtl_form_submit_theme() {
    var txt_search = document.modulo.ricerca.value;
    if ((title == "") || (title == "undefined")) {} else {
        document.modulo.action = "search.php";
        document.modulo.submit();
    }
}

function crtl_form_submit_theme(var_page) {
    var title = document.modulo.title.value;
    var description = document.modulo.description.value;
    var date = document.modulo.date.value;
    var demo = document.modulo.demo.value;
    var purchase = document.modulo.purchase.value;
    var file = document.modulo.file.value;
    if (var_page == "add") {
        var condition = document.modulo.condition.checked;
    }
    var posizione_punto = file.lastIndexOf(".");
    var lunghezza_stringa = file.length;
    var estensione = file.substring(posizione_punto + 1, lunghezza_stringa);
    var kind = document.modulo.kind.value;
    var price = document.modulo.price.value;
    var espressione = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    var myRegex2 = /^http:\/\/(www\.)?[a-zA-Z0-9.]{3,}\.[a-zA-Z]{2,}(\/)[a-zA-Z0-9-\/-?-\-_]{0,}?$/;
    anno = parseInt(date.substr(6), 10);
    mese = parseInt(date.substr(3, 2), 10);
    giorno = parseInt(date.substr(0, 2), 10);
    var data = new Date(anno, mese - 1, giorno);
    var dataa = new Date();
    var dzien = dataa.getDate();
    var miesiac = dataa.getMonth() + 1;
    var rok = (dataa.getFullYear ? dataa.getFullYear() : dataa.getYear());
    if (dzien < 10) dzien = "0" + dzien;
    if (miesiac < 10) miesiac = "0" + miesiac;
    var data_now = (dzien + "/" + miesiac + "/" + rok);
    var arr1 = date.split("/");
    var arr2 = data_now.split("/");
    var d1 = new Date(arr1[2], arr1[1] - 1, arr1[0]);
    var d2 = new Date(arr2[2], arr2[1] - 1, arr2[0]);
    var r1 = d1.getTime();
    var r2 = d2.getTime();
    if (var_page != "add") {
        var id_tema = document.modulo.id_tema.value;
    }
    if ((title == "") || (title == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Title field is empty</li>";
        document.modulo.title.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((description == "") || (description == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Description field is empty</li>";
        document.modulo.description.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((date == "") || (date == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify the theme creation date</li>";
        document.modulo.date.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((date) && (!espressione.test(date))) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Date format is incorrect</li>";
        document.modulo.date.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (r1 > r2) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Creation date is in the future!</li>";
        document.modulo.date.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (!(data.getFullYear() == anno && data.getMonth() + 1 == mese && data.getDate() == giorno)) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Date format is incorrect</li>";
        document.modulo.date.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((demo == "") || (demo == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a live demo URL</li>";
        document.modulo.demo.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((!myRegex2.test(demo)) && (demo != "#")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a valid live demo URL (e.g. http://themeclue.com/yourtheme)</li>";
        document.modulo.demo.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((purchase == "") || (purchase == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a purchase page URL</li>";
        document.modulo.purchase.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((!myRegex2.test(purchase)) && (purchase != "#")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a valid purchase page URL (e.g. http://themeclue.com/yourtheme)</li>";
        document.modulo.purchase.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (((file == "") || (file == "undefined")) && (var_page == "add")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please upload a theme screenshot</li>";
        document.modulo.file.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (((estensione != "jpg") && (estensione != "jpeg") && (estensione != "png")) && (var_page == "add")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Image format is not valid. Only JPG, JPEG and PNG are allowed</li>";
        document.modulo.file.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((kind == "") || (kind == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a kind</li>";
        document.modulo.kind.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((price == "") || (price == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please specify a price</li>";
        document.modulo.price.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (isNaN(price)) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Price format is incorrect</li>";
        document.modulo.price.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if (!(price < 201) && (price > 0)) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Price can't exceed $200</li>";
        document.modulo.price.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else if ((!condition) && (var_page == "add")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Please, check the last checkbox at the end of the page for submitting your theme</li>";
        document.modulo.condition.focus();
        document.getElementById('first-title').scrollIntoView();
        return false;
    } else {
        if (var_page == "add") {
            document.modulo.action = "submit.php";
            document.modulo.submit();
        } else if (var_page == "edit") {
            document.modulo.action = "edit-theme.php?id_th=" + id_tema;
            document.modulo.submit();
        }
    }
}

function crtl_form_delete_theme() {
    var condition = document.modulo1.condition.checked;
    var id_tema = document.modulo1.id_tema.value;
    if (!condition) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Condition can't be be selected</li>";
        document.modulo1.condition.focus();
        return false;
    } else {
        document.modulo1.action = "edit-theme.php?id_th=" + id_tema + "&act=del";
        document.modulo1.submit();
    }
}

function crtl_form_signup() {
    var name = document.modulo.name.value;
    var name_length = document.modulo.name.value.length;
    var username = document.modulo.username.value;
    var username_length = document.modulo.username.value.length;
    var email = document.modulo.email_signup.value;
    var password = document.modulo.password_signup.value;
    var password_length = document.modulo.password_signup.value.length;
    var espressione = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+[\.]([a-z0-9-]+)*([a-z]{2,3})$");
    var myRegex1 = /\W/i;
    if ((name == "") || (name == "undefined")) {
        var el = document.getElementById("err-name");
        el.innerHTML = "You can't leave this empty";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.name.focus();
        return false;
    } else if (name_length < 2) {
        var el = document.getElementById("err-name");
        el.innerHTML = "Your Author Name must be at least 2 characters long";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.name.focus();
        return false;
    } else if ((username == "") || (username == "undefined")) {
        var el = document.getElementById("err-username");
        el.innerHTML = "You can't leave this empty";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.username.focus();
        return false;
    } else if (myRegex1.test(username)) {
        var el = document.getElementById("err-username");
        el.innerHTML = "Some characters are not allowed. Try again?";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.username.focus();
        return false;
    } else if (username_length < 2) {
        var el = document.getElementById("err-username");
        el.innerHTML = "Username must be at least 2 characters long";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.username.focus();
        return false;
    } else if ((email == "") || (email == "undefined")) {
        var el = document.getElementById("err-email");
        el.innerHTML = "You can't leave this empty";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.email_signup.focus();
        return false;
    } else if (!espressione.test(email)) {
        var el = document.getElementById("err-email");
        el.innerHTML = "This is not a valid email address. Try another?";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-pass").setAttribute("class", "help-block alert-red hidden");
        document.modulo.email_signup.focus();
        return false;
    } else if ((password == "") || (password == "undefined")) {
        var el = document.getElementById("err-pass");
        el.innerHTML = "You can't leave this empty";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.modulo.password_signup.focus();
        return false;
    } else if (password_length < 6) {
        var el = document.getElementById("err-pass");
        el.innerHTML = "Password must be at least 6 characters long";
        el.setAttribute("class", "help-block alert-red");
        document.getElementById("err-name").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-username").setAttribute("class", "help-block alert-red hidden");
        document.getElementById("err-email").setAttribute("class", "help-block alert-red hidden");
        document.modulo.password_signup.focus();
        return false;
    } else {
        document.modulo.action = "signup.php";
        document.modulo.submit();
    }
}

function crtl_form_submit_comment(url_tema) {
    var commento = document.modulo.commento.value;
    if ((commento == "") || (commento == "undefined")) {
        document.modulo.commento.focus();
        return false;
    } else {
        document.modulo.action = url_tema + '#comments';
        document.modulo.submit();
    }
}

function crtl_form_edit_profile() {
    var name = document.modulo.name.value;
    var name_length = document.modulo.name.value.length;
    var username = document.modulo.username.value;
    var username_length = document.modulo.username.value.length;
    var email = document.modulo.email.value;
    var website = document.modulo.website.value;
    var espressione = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+[\.]([a-z0-9-]+)*([a-z]{2,3})$");
    var myRegex1 = /\W/i;
    var myRegex2 = /^http:\/\/(www\.)?[a-zA-Z0-9-.]{3,}\.[a-zA-Z-\/]{2,}(\/)?$/;
    if (document.getElementById("alert-success")) {
        var success = document.getElementById("alert-success");
        success.style.display = "none";
    }
    if ((name == "") || (name == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li> Your name field is empty</li>";
        document.modulo.name.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (name_length < 2) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li> Your name must be at least 2 characters long</li>";
        document.modulo.name.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if ((username == "") || (username == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Username field is empty</li>";
        document.modulo.username.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (myRegex1.test(username)) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Username field is not valid</li>";
        document.modulo.username.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (username_length < 2) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li> Username must be at least 2 characters long</li>";
        document.modulo.username.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if ((email == "") || (email == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Email field is empty</li>";
        document.modulo.email.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (!espressione.test(email)) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Invalid email address</li>";
        document.modulo.email.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if ((website) && (!myRegex2.test(website))) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Invalid website address</li>";
        document.modulo.website.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else {
        document.modulo.action = "edit-profile.php";
        document.modulo.submit();
    }
}

function crtl_form_edit_passw_profile() {
    var old_pass = document.modulo2.old_pass.value;
    var old_pass_length = document.modulo2.old_pass.value.length;
    var new_pass = document.modulo2.new_pass.value;
    var new_pass_length = document.modulo2.new_pass.value.length;
    if ((old_pass == "") || (old_pass == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>Old Password field is empty</li>";
        document.modulo2.old_pass.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (old_pass_length < 6) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li> Old Password must be at least 6 characters long</li>";
        document.modulo2.old_pass.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if ((new_pass == "") || (new_pass == "undefined")) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li>New Password field is empty</li>";
        document.modulo2.new_pass.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else if (new_pass_length < 6) {
        var el = document.getElementById("alert-error");
        el.style.display = "block";
        var txt_err = document.getElementById("txt_err");
        txt_err.innerHTML = "<li> New Password must be at least 6 characters long</li>";
        document.modulo2.new_pass.focus();
        document.getElementById('main').scrollIntoView();
        return false;
    } else {
        document.modulo2.action = "edit-profile.php";
        document.modulo2.submit();
    }
}

function crtl_form_resetpassword() {
    var email = document.modulo.email.value;
    var espressione = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+[\.]([a-z0-9-]+)*([a-z]{2,3})$");
    if ((email == "") || (email == "undefined")) {
        var el = document.getElementById("err-email");
        el.innerHTML = "You can't leave this empty";
        el.setAttribute("class", "help-block alert-red");
        document.modulo.email.focus();
        return false;
    } else if (!espressione.test(email)) {
        var el = document.getElementById("err-email");
        el.innerHTML = "Invalid email address";
        el.setAttribute("class", "help-block alert-red");
        document.modulo.email.focus();
        return false;
    } else {
        document.modulo.action = "reset-password.php";
        document.modulo.submit();
    }
}

function crtl_form_resetpassword2() {
    var key = document.modulo.key.value;
    var pass = document.modulo.pass.value;
    var pass_length = document.modulo.pass.value.length;
    if ((pass == "") || (pass == "undefined")) {
        var el = document.getElementById("err-pass");
        el.innerHTML = "Password can't be blank.";
        el.setAttribute("class", "help-block alert-red");
        document.modulo.pass.focus();
        return false;
    } else if (pass_length < 6) {
        var el = document.getElementById("err-pass");
        el.innerHTML = "Password is too short (minimum is 6 characters).";
        el.setAttribute("class", "help-block alert-red");
        document.modulo.pass.focus();
        return false;
    } else {
        document.modulo.action = "../../reset-password/" + key + "/edit";
        document.modulo.submit();
    }
}