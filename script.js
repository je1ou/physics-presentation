// Все функции конвертации и решения задач

// ====================
// КОНВЕРТЕР ТЕМПЕРАТУРЫ
// ====================
function initTemperatureConverter() {
    const tempInput = document.getElementById('temp-input');
    const tempFrom = document.getElementById('temp-from');
    const tempConvertBtn = document.getElementById('temp-convert');
    const tempC = document.getElementById('temp-c');
    const tempF = document.getElementById('temp-f');
    const tempK = document.getElementById('temp-k');
    
    function convertTemperature() {
        const value = parseFloat(tempInput.value) || 0;
        const from = tempFrom.value;
        
        let celsius;
        
        switch(from) {
            case 'c':
                celsius = value;
                break;
            case 'f':
                celsius = (value - 32) * 5/9;
                break;
            case 'k':
                celsius = value - 273.15;
                break;
        }
        
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        
        tempC.textContent = celsius.toFixed(2);
        tempF.textContent = fahrenheit.toFixed(2);
        tempK.textContent = kelvin.toFixed(2);
    }
    
    tempConvertBtn.addEventListener('click', convertTemperature);
    tempInput.addEventListener('input', convertTemperature);
    tempFrom.addEventListener('change', convertTemperature);
    
    // Начальное значение
    convertTemperature();
}

// ====================
// КОНВЕРТЕР ДЛИНЫ
// ====================
function initLengthConverter() {
    const lengthInput = document.getElementById('length-input');
    const lengthFrom = document.getElementById('length-from');
    const lengthConvertBtn = document.getElementById('length-convert');
    const lengthM = document.getElementById('length-m');
    const lengthKm = document.getElementById('length-km');
    const lengthMile = document.getElementById('length-mile');
    const lengthFt = document.getElementById('length-ft');
    
    function convertLength() {
        const value = parseFloat(lengthInput.value) || 0;
        const from = lengthFrom.value;
        
        let meters;
        
        switch(from) {
            case 'm':
                meters = value;
                break;
            case 'km':
                meters = value * 1000;
                break;
            case 'mile':
                meters = value * 1609.34;
                break;
            case 'ft':
                meters = value * 0.3048;
                break;
        }
        
        const kilometers = meters / 1000;
        const miles = meters / 1609.34;
        const feet = meters / 0.3048;
        
        lengthM.textContent = meters.toFixed(2);
        lengthKm.textContent = kilometers.toFixed(4);
        lengthMile.textContent = miles.toFixed(4);
        lengthFt.textContent = feet.toFixed(2);
    }
    
    lengthConvertBtn.addEventListener('click', convertLength);
    lengthInput.addEventListener('input', convertLength);
    lengthFrom.addEventListener('change', convertLength);
    
    convertLength();
}

// ====================
// КОНВЕРТЕР МАССЫ
// ====================
function initMassConverter() {
    const massInput = document.getElementById('mass-input');
    const massFrom = document.getElementById('mass-from');
    const massConvertBtn = document.getElementById('mass-convert');
    const massKg = document.getElementById('mass-kg');
    const massG = document.getElementById('mass-g');
    const massLb = document.getElementById('mass-lb');
    const massOz = document.getElementById('mass-oz');
    
    function convertMass() {
        const value = parseFloat(massInput.value) || 0;
        const from = massFrom.value;
        
        let kilograms;
        
        switch(from) {
            case 'kg':
                kilograms = value;
                break;
            case 'g':
                kilograms = value / 1000;
                break;
            case 'lb':
                kilograms = value * 0.453592;
                break;
            case 'oz':
                kilograms = value * 0.0283495;
                break;
        }
        
        const grams = kilograms * 1000;
        const pounds = kilograms / 0.453592;
        const ounces = kilograms / 0.0283495;
        
        massKg.textContent = kilograms.toFixed(4);
        massG.textContent = grams.toFixed(2);
        massLb.textContent = pounds.toFixed(4);
        massOz.textContent = ounces.toFixed(4);
    }
    
    massConvertBtn.addEventListener('click', convertMass);
    massInput.addEventListener('input', convertMass);
    massFrom.addEventListener('change', convertMass);
    
    convertMass();
}

// ====================
// КОНВЕРТЕР СКОРОСТИ
// ====================
function initSpeedConverter() {
    const speedInput = document.getElementById('speed-input');
    const speedFrom = document.getElementById('speed-from');
    const speedConvertBtn = document.getElementById('speed-convert');
    const speedMs = document.getElementById('speed-ms');
    const speedKmh = document.getElementById('speed-kmh');
    const speedMph = document.getElementById('speed-mph');
    const speedKnot = document.getElementById('speed-knot');
    
    function convertSpeed() {
        const value = parseFloat(speedInput.value) || 0;
        const from = speedFrom.value;
        
        let metersPerSecond;
        
        switch(from) {
            case 'ms':
                metersPerSecond = value;
                break;
            case 'kmh':
                metersPerSecond = value / 3.6;
                break;
            case 'mph':
                metersPerSecond = value * 0.44704;
                break;
            case 'knot':
                metersPerSecond = value * 0.514444;
                break;
        }
        
        const kmh = metersPerSecond * 3.6;
        const mph = metersPerSecond / 0.44704;
        const knots = metersPerSecond / 0.514444;
        
        speedMs.textContent = metersPerSecond.toFixed(2);
        speedKmh.textContent = kmh.toFixed(2);
        speedMph.textContent = mph.toFixed(2);
        speedKnot.textContent = knots.toFixed(2);
    }
    
    speedConvertBtn.addEventListener('click', convertSpeed);
    speedInput.addEventListener('input', convertSpeed);
    speedFrom.addEventListener('change', convertSpeed);
    
    convertSpeed();
}

// ====================
// РЕШАТЕЛЬ ЗАДАЧ
// ====================
function initProblemSolver() {
    const speedSolver = document.getElementById('speed-solver');
    const timeSolver = document.getElementById('time-solver');
    const distanceSolver = document.getElementById('distance-solver');
    const speedUnit = document.getElementById('speed-unit');
    const timeUnit = document.getElementById('time-unit');
    const distanceUnit = document.getElementById('distance-unit');
    const solutionSteps = document.getElementById('solution-steps');
    const solutionAnswer = document.getElementById('solution-answer');
    const clearSolver = document.getElementById('clear-solver');
    
    function solveProblem() {
        const speedValue = parseFloat(speedSolver.value);
        const timeValue = parseFloat(timeSolver.value);
        const distanceValue = parseFloat(distanceSolver.value);
        
        const filledFields = [
            {name: 'speed', value: speedValue, unit: speedUnit.value},
            {name: 'time', value: timeValue, unit: timeUnit.value},
            {name: 'distance', value: distanceValue, unit: distanceUnit.value}
        ].filter(field => !isNaN(field.value));
        
        if (filledFields.length !== 2) {
            if (filledFields.length === 3) {
                solutionSteps.innerHTML = '<p>Все три поля заполнены! Оставьте одно поле пустым для расчёта.</p>';
                solutionAnswer.textContent = '';
            } else {
                solutionSteps.innerHTML = '<p>Заполните два любых поля для расчёта третьего.</p>';
                solutionAnswer.textContent = '';
            }
            return;
        }
        
        // Конвертация в базовые единицы
        let speedMs, timeS, distanceM;
        
        if (!isNaN(speedValue)) {
            speedMs = speedUnit.value === 'kmh' ? speedValue / 3.6 : speedValue;
        }
        
        if (!isNaN(timeValue)) {
            switch(timeUnit.value) {
                case 'h': timeS = timeValue * 3600; break;
                case 'min': timeS = timeValue * 60; break;
                default: timeS = timeValue;
            }
        }
        
        if (!isNaN(distanceValue)) {
            distanceM = distanceUnit.value === 'km' ? distanceValue * 1000 : distanceValue;
        }
        
        let result, resultUnit, steps = [];
        
        if (isNaN(speedValue)) {
            result = distanceM / timeS;
            resultUnit = 'м/с';
            
            steps.push(`<p><strong>Дано:</strong></p>`);
            steps.push(`<p>Расстояние S = ${distanceValue} ${distanceUnit.value === 'km' ? 'км' : 'м'}</p>`);
            steps.push(`<p>Время t = ${timeValue} ${getTimeUnitName(timeUnit.value)}</p>`);
            steps.push(`<p><strong>Решение:</strong></p>`);
            steps.push(`<p>Используем формулу: v = S / t</p>`);
            steps.push(`<p>v = ${distanceM.toFixed(2)} м / ${timeS.toFixed(2)} с</p>`);
            steps.push(`<p>v = ${result.toFixed(2)} м/с</p>`);
            
            if (speedUnit.value === 'kmh') {
                const resultKmh = result * 3.6;
                steps.push(`<p>v = ${resultKmh.toFixed(2)} км/ч</p>`);
                result = resultKmh;
                resultUnit = 'км/ч';
            }
            
        } else if (isNaN(timeValue)) {
            result = distanceM / speedMs;
            resultUnit = 'с';
            
            steps.push(`<p><strong>Дано:</strong></p>`);
            steps.push(`<p>Расстояние S = ${distanceValue} ${distanceUnit.value === 'km' ? 'км' : 'м'}</p>`);
            steps.push(`<p>Скорость v = ${speedValue} ${speedUnit.value === 'kmh' ? 'км/ч' : 'м/с'}</p>`);
            steps.push(`<p><strong>Решение:</strong></p>`);
            steps.push(`<p>Используем формулу: t = S / v</p>`);
            steps.push(`<p>t = ${distanceM.toFixed(2)} м / ${speedMs.toFixed(2)} м/с</p>`);
            steps.push(`<p>t = ${result.toFixed(2)} с</p>`);
            
            if (timeUnit.value === 'h') {
                const resultH = result / 3600;
                steps.push(`<p>t = ${resultH.toFixed(2)} ч</p>`);
                result = resultH;
                resultUnit = 'ч';
            } else if (timeUnit.value === 'min') {
                const resultMin = result / 60;
                steps.push(`<p>t = ${resultMin.toFixed(2)} мин</p>`);
                result = resultMin;
                resultUnit = 'мин';
            }
            
        } else if (isNaN(distanceValue)) {
            result = speedMs * timeS;
            resultUnit = 'м';
            
            steps.push(`<p><strong>Дано:</strong></p>`);
            steps.push(`<p>Скорость v = ${speedValue} ${speedUnit.value === 'kmh' ? 'км/ч' : 'м/с'}</p>`);
            steps.push(`<p>Время t = ${timeValue} ${getTimeUnitName(timeUnit.value)}</p>`);
            steps.push(`<p><strong>Решение:</strong></p>`);
            steps.push(`<p>Используем формулу: S = v × t</p>`);
            steps.push(`<p>S = ${speedMs.toFixed(2)} м/с × ${timeS.toFixed(2)} с</p>`);
            steps.push(`<p>S = ${result.toFixed(2)} м</p>`);
            
            if (distanceUnit.value === 'km') {
                const resultKm = result / 1000;
                steps.push(`<p>S = ${resultKm.toFixed(2)} км</p>`);
                result = resultKm;
                resultUnit = 'км';
            }
        }
        
        solutionSteps.innerHTML = steps.join('');
        solutionAnswer.textContent = `Ответ: ${result.toFixed(2)} ${resultUnit}`;
        
        if (isNaN(speedValue)) {
            speedSolver.value = result.toFixed(2);
        } else if (isNaN(timeValue)) {
            timeSolver.value = result.toFixed(2);
        } else if (isNaN(distanceValue)) {
            distanceSolver.value = result.toFixed(2);
        }
    }
    
    function getTimeUnitName(unit) {
        switch(unit) {
            case 'h': return 'ч';
            case 'min': return 'мин';
            case 's': return 'с';
            default: return '';
        }
    }
    
    [speedSolver, timeSolver, distanceSolver].forEach(input => {
        input.addEventListener('input', solveProblem);
    });
    
    [speedUnit, timeUnit, distanceUnit].forEach(select => {
        select.addEventListener('change', solveProblem);
    });
    
    clearSolver.addEventListener('click', function() {
        speedSolver.value = '';
        timeSolver.value = '';
        distanceSolver.value = '';
        solutionSteps.innerHTML = '';
        solutionAnswer.textContent = '';
    });
    
    // Первоначальный расчёт
    solveProblem();
}

// ====================
// ИНИЦИАЛИЗАЦИЯ ВСЕГО
// ====================
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем все конвертеры
    initTemperatureConverter();
    initLengthConverter();
    initMassConverter();
    initSpeedConverter();
    initProblemSolver();
    
    console.log('Все конвертеры и решатель инициализированы!');
});

// Экспорт функций для отладки
window.physicsTools = {
    celsiusToFahrenheit: function(c) { return (c * 9/5) + 32; },
    fahrenheitToCelsius: function(f) { return (f - 32) * 5/9; },
    celsiusToKelvin: function(c) { return c + 273.15; },
    kelvinToCelsius: function(k) { return k - 273.15; },
    metersToKilometers: function(m) { return m / 1000; },
    kilometersToMeters: function(km) { return km * 1000; },
    solveSpeedDistanceTime: function(v, t, s) {
        if (v && t && !s) return v * t;
        if (s && t && !v) return s / t;
        if (s && v && !t) return s / v;
        return null;
    }
};
