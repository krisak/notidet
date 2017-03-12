var canvas = new fabric.Canvas('memeditor', {preserveObjectStacking: true});

var upText = new fabric.Textbox('horni', {
    left: 10,
	top: 10,
	width: 480,
	height: 200,
	textAlign: 'center',
	fontFamily: "Impact",
	stroke: '#ffffff',
    strokeWidth: 1,
	lockMovementX : true,
    lockMovementY : true,
    lockScalingX : true,
    lockScalingY : true,
    lockRotation : true,
    hasControls : false,
    hasBorders : false,
    hoverCursor : "default",
    editable : false,
	});
canvas.add(upText);
upText.moveTo(50);
	
var lowText = new fabric.Textbox('spodni', {
    originY : 'bottom',
    left: 10,
	top: 500,
	width: 480,
	height:200,
	textAlign: 'center',
	fontFamily: "Impact",
	stroke: '#ffffff',
    strokeWidth: 1,
	lockMovementX : true,
    lockMovementY : true,
    lockScalingX : true,
    lockScalingY : true,
    lockRotation : true,
    hasControls : false,
    hasBorders : false,
    hoverCursor : "default",
    editable: false,

	});
canvas.add(lowText);
lowText.moveTo(50);
	
document.getElementById('file').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
        var data = f.target.result;                    
        fabric.Image.fromURL(data, function (img) {
            var oImg = img.set({left: 0, top: 0, angle: 00}).scale(0.5);
            canvas.add(oImg).renderAll();
            upText.bringToFront();
			lowText.bringToFront();
            var a = canvas.setActiveObject(oImg);
            //var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
        });
    };
    reader.readAsDataURL(file);
});

function updateMeme(){
    upText.setText(document.getElementById("uppertext").value);
    lowText.setText(document.getElementById("lowertext").value);
    canvas.renderAll();
}
