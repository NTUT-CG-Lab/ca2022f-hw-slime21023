const standardParameterSettings = {
    angleX: { min: -30, value: 0, max: 30 },
    angleY: { min: -30, value: 0, max: 30 },
    angleZ: { min: -30, value: 0, max: 30 },
    eyeLOpen: { min: 0, value: 1, max: 2 },
    eyeLSmile: { min: 0, value: 0, max: 1 },
    eyeROpen: { min: 0, value: 1, max: 2 },
    eyeRSmile: { min: 0, value: 0, max: 1 },
    eyeBallX: { min: -1, value: 0, max: 1 },
    eyeBallY: { min: -1, value: 0, max: 1 },
    eyeBallForm: { min: -1, value: 0, max: 1 },
    browLY: { min: -1, value: 0, max: 1 },
    browRY: { min: -1, value: 0, max: 1 },
    browLX: { min: -1, value: 0, max: 1 },
    browRX: { min: -1, value: 0, max: 1 },
    browLAngle: { min: -1, value: 0, max: 1 },
    browRAngle: { min: -1, value: 0, max: 1 },
    browLForm: { min: -1, value: 0, max: 1 },
    browRForm: { min: -1, value: 0, max: 1 },
    bodyAngleX: { min: -10, value: 0, max: 10 },
    bodyAngleY: { min: -10, value: 0, max: 10 },
    bodyAngleZ: { min: -10, value: 0, max: 10 },
    breath: { min: 0, value: 0, max: 1 },
    armLA: { min: -30, value: 0, max: 30 },
    armRA: { min: -30, value: 0, max: 30 },
    armLB: { min: -30, value: 0, max: 30 },
    armRB: { min: -30, value: 0, max: 30 }
};

const specialParameterSettings = {
    tere: { min: -1, value: 0, max: 1 },
    faceForm: { min: -1, value: 0, max: 1 },
    eyeForm: { min: -1, value: 0, max: 1 },
    tear: { min: -10, value: 0, max: 10 },
    mouthForm: { min: -1, value: 0, max: 1 },
    mouthOpenY: { min: -10, value: 0, max: 10 },
    scarf: { min: -10, value: 0, max: 10 },
    bodyUpper: { min: -10, value: 0, max: 10 },
    bustY: { min: -10, value: 0, max: 10 },
    handChangeR: { min: -10, value: 0, max: 10 },
    handAngleR: { min: -10, value: 0, max: 10 },
    handDhangeL: { min: -10, value: 0, max: 10 },
    handAngleL: { min: -10, value: 0, max: 10 },
    hairFront: { min: -1, value: 0, max: 1 },
    hairSide: { min: -1, value: 0, max: 1 },
    hairBack: { min: -1, value: 0, max: 1 },
};

const updateModelParam = (paramName, value) => {
    const param = paramName
    runModel(model => { model[param] = value; })
}

const standard_name = document.getElementById('standard_name');
const standard_output = document.getElementById('standard_output');
const standard_input = document.getElementById('standard_input');
const standard_select = document.getElementById('standard_select');

standard_select.onchange = () => {
    let currentName = standard_name.innerHTML;
    if (currentName != "") {
        updateModelParam(currentName, 0);
    }

    standard_name.innerHTML = standard_select.value;
    if (standard_select.value == "") return;
    const { min, value, max } = standardParameterSettings[standard_select.value];
    standard_input.min = min
    standard_input.max = max
    standard_input.value = value
    standard_output.value = value
}

standard_input.onchange = () => {
    standard_output.value = standard_input.value
    let currentName = standard_name.innerHTML;
    if (currentName != "") {
        updateModelParam(currentName, standard_input.value);
    }
}

const special_name = document.getElementById('special_name');
const special_output = document.getElementById('special_output');
const special_input = document.getElementById('special_input');
const special_select = document.getElementById('special_select');

special_select.onchange = () => {
    let currentName = special_name.innerHTML;
    if (currentName != "") {
        updateModelParam(currentName, 0);
    }

    special_name.innerHTML = special_select.value;
    if (special_select.value == "") return;
    const { min, value, max } = specialParameterSettings[special_select.value];
    special_input.min = min
    special_input.max = max
    special_input.value = value
    special_output.value = value
}

special_input.onchange = () => {
    special_output.value = special_input.value
    let currentName = special_name.innerHTML;
    if (currentName != "") {
        updateModelParam(currentName, special_input.value);
    }
}

document.querySelector('.Sliders').addEventListener('change', e => {
    let val = parseFloat(e.target.value);
    let id = e.target.id;
    runModel(view => {
        //先傳到lapp delegate的view的參數
        //綁定參數
        if (id === 'ParamAngleX') view.angleX = val;
        if (id === 'ParamAngleY') view.angleY = val;
        if (id === 'ParamAngleZ') view.angleZ = val;
        if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
        if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
        if (id === 'ParamEyeROpen') view.eyeROpen = val;
        if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
        if (id === 'ParamEyeBallX') view.eyeBallX = val;
        if (id === 'ParamEyeBallY') view.eyeBallY = val;
        view.eyeBallForm = 0;
        if (id === 'ParamBrowLY') view.browLY = val;
        if (id === 'ParamBrowRY') view.browRY = val;
        if (id === 'ParamBrowLX') view.browLX = val;
        if (id === 'ParamBrowRX') view.browRX = val;
        if (id === 'ParamBrowLAngle') view.browLAngle = val;
        if (id === 'ParamBrowRAngle') view.browRAngle = val;
        if (id === 'ParamBrowLForm') view.browLForm = val;
        if (id === 'ParamBrowRForm') view.browRForm = val;
        //mouth form
        if (id === 'ParamMouthForm') view.mouthForm = val;
        //mouth openY
        if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
        if (id === 'ParamCheek') view.cheek = val;
        if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
        if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
        if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
        if (id === 'ParamBreath') view.breath = val;
        view.armLA = 0;
        view.armRA = 0;
        view.armLB = 0;
        view.armRB = 0;
        view.handL = 0;
        view.handR = 0;
        if (id === 'ParamHairFront') view.hairFront = val;
        view.hairSide = 0;
        if (id === 'ParamHairBack') view.hairBack = val;
        view.hairFluffy = 0;
        view.shoulderY = 0;
        view.bustX = 0;
        view.bustY = 0;
        view.baseX = 0;
        view.baseY = 0;
    });
});
