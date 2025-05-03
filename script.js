document.addEventListener("DOMContentLoaded", function () {
    const diagnosisForm = document.getElementById("diagnosisForm");
    const symptomsInput = document.getElementById("symptoms");
    const diagnosisResult = document.getElementById("diagnosisResult");

    const symptomDiagnosisData = {
        "fever": {
            diagnosis: "You might have a viral infection.",
            medicine: "Paracetamol (500mg) - Twice a day.",
            treatment: "Rest, drink fluids, and keep a cool environment.",
            nutrients: "Vitamin C, Zinc, and plenty of fluids like coconut water.",
            precautions: "Avoid caffeine and alcohol, monitor temperature regularly."
        },
        "cough": {
            diagnosis: "You may have a respiratory issue.",
            medicine: "Cough syrup (10 ml) - Three times a day.",
            treatment: "Stay hydrated, use throat lozenges, avoid cold air.",
            nutrients: "Honey, ginger, and Vitamin C-rich foods.",
            precautions: "Avoid cold beverages and use a humidifier if the air is dry."
        },
        "headache": {
            diagnosis: "Could be due to stress or dehydration.",
            medicine: "Ibuprofen (200mg) - As needed.",
            treatment: "Drink water, rest in a quiet environment, avoid screens.",
            nutrients: "Magnesium, B vitamins, stay hydrated.",
            precautions: "Avoid caffeine, loud noises, and bright lights."
        },
        "fatigue": {
            diagnosis: "You might be exhausted or sleep-deprived.",
            medicine: "Vitamin B Complex - Once daily.",
            treatment: "Get 7-8 hours of sleep, manage stress, eat a balanced diet.",
            nutrients: "Iron, magnesium, and complex carbs.",
            precautions: "Avoid caffeine after noon and take short breaks."
        },
        "sore throat": {
            diagnosis: "Possibly a throat infection.",
            medicine: "Amoxicillin (500mg) - Twice daily for 7 days.",
            treatment: "Gargle with warm salt water, stay hydrated, avoid irritants.",
            nutrients: "Vitamin C, honey, and ginger.",
            precautions: "Avoid cold drinks and smoking."
        },
        "runny nose": {
            diagnosis: "Common cold symptoms, likely viral.",
            medicine: "Antihistamine (Loratadine) - Once daily.",
            treatment: "Rest, stay hydrated, use saline nasal spray.",
            nutrients: "Vitamin C, zinc, and hydration.",
            precautions: "Avoid allergens and irritants."
        },
        "stomach ache": {
            diagnosis: "Could be indigestion or mild infection.",
            medicine: "Antacid (10 ml) - After meals.",
            treatment: "Avoid spicy foods, drink ginger tea, rest.",
            nutrients: "Probiotics, ginger, and fiber.",
            precautions: "Avoid fatty foods and large meals."
        },
        "diarrhea": {
            diagnosis: "Possible gastrointestinal infection or food intolerance.",
            medicine: "Loperamide (2 mg) - As needed, 1-2 times a day.",
            treatment: "Stay hydrated, avoid dairy and spicy foods.",
            nutrients: "Electrolytes, banana, and plain rice.",
            precautions: "Avoid caffeine and greasy foods."
        },
        "nausea": {
            diagnosis: "May be food poisoning or motion sickness.",
            medicine: "Ondansetron (4 mg) - As needed.",
            treatment: "Rest, avoid strong odors, drink ginger tea.",
            nutrients: "Ginger, peppermint, and hydration.",
            precautions: "Avoid heavy meals and strong smells."
        },
        "back pain": {
            diagnosis: "Could be muscle strain or poor posture.",
            medicine: "Ibuprofen (200mg) - As needed.",
            treatment: "Stretch, use a heating pad, maintain good posture.",
            nutrients: "Calcium, vitamin D, and magnesium.",
            precautions: "Avoid heavy lifting, take breaks while sitting."
        },
        "insomnia": {
            diagnosis: "Stress or irregular sleep pattern.",
            medicine: "Melatonin (3 mg) - 30 minutes before sleep.",
            treatment: "Establish a sleep routine, limit caffeine intake.",
            nutrients: "Magnesium, B vitamins, and melatonin-rich foods.",
            precautions: "Avoid screens before bed, keep a dark room."
        },
        "dizziness": {
            diagnosis: "Could be low blood pressure or dehydration.",
            medicine: "Meclizine (25 mg) - As needed.",
            treatment: "Drink fluids, avoid sudden movements, rest.",
            nutrients: "Electrolytes, hydration, and iron.",
            precautions: "Avoid rapid head movements and large meals."
        },
        "rash": {
            diagnosis: "Possible allergic reaction or skin infection.",
            medicine: "Hydrocortisone cream - Apply twice a day.",
            treatment: "Avoid irritants, use soothing lotion, keep skin clean.",
            nutrients: "Vitamin E, omega-3, and hydration.",
            precautions: "Avoid scratching and harsh skin products."
        },
        "chest pain": {
            diagnosis: "May indicate heart issue or muscle strain.",
            medicine: "Aspirin (81 mg) - Once daily.",
            treatment: "Seek medical attention, rest, avoid stress.",
            nutrients: "Magnesium, omega-3, and potassium.",
            precautions: "Avoid strenuous activity, monitor symptoms closely."
        },
        "shortness of breath": {
            diagnosis: "Could be asthma or respiratory infection.",
            medicine: "Albuterol inhaler - As needed.",
            treatment: "Use inhaler, avoid allergens, stay hydrated.",
            nutrients: "Vitamin C, hydration, and antioxidants.",
            precautions: "Avoid dusty or polluted areas."
        },
        "swelling": {
            diagnosis: "Could be due to fluid retention or an injury.",
            medicine: "Diuretics (Furosemide) - Once daily.",
            treatment: "Elevate affected area, rest, limit salt intake.",
            nutrients: "Potassium-rich foods, like bananas.",
            precautions: "Avoid salty foods and prolonged standing."
        },
        "joint pain": {
            diagnosis: "Possibly arthritis or muscle strain.",
            medicine: "Acetaminophen (500mg) - Every 4-6 hours as needed.",
            treatment: "Physical therapy, warm compress, avoid overexertion.",
            nutrients: "Omega-3, calcium, and vitamin D.",
            precautions: "Avoid repetitive joint movements."
        },
        "constipation": {
            diagnosis: "May be due to lack of fiber or hydration.",
            medicine: "Fiber supplements - Once daily.",
            treatment: "Increase fiber intake, drink water, exercise.",
            nutrients: "Fiber, water, and probiotics.",
            precautions: "Avoid high-fat and processed foods."
        },
        "vomiting": {
            diagnosis: "Could be due to food poisoning or infection.",
            medicine: "Ondansetron (4 mg) - As needed.",
            treatment: "Rest, drink water in small sips, avoid solid foods initially.",
            nutrients: "Ginger, clear liquids, and electrolytes.",
            precautions: "Avoid solid food until symptoms ease."
        },
        "high blood pressure": {
            diagnosis: "May require lifestyle changes.",
            medicine: "Lisinopril (10 mg) - Once daily.",
            treatment: "Reduce sodium, exercise, manage stress.",
            nutrients: "Potassium, magnesium, and omega-3.",
            precautions: "Limit caffeine, monitor blood pressure."
        },
        "low blood sugar": {
            diagnosis: "May happen in diabetics or after fasting.",
            medicine: "Glucose tablets - 1 tablet every 15 minutes.",
            treatment: "Eat small meals, monitor blood sugar.",
            nutrients: "Complex carbs, protein, and vitamin C.",
            precautions: "Avoid skipping meals and heavy activity."
        },
        // Add remaining symptoms here
    };

    const sweetMessage = "Take care! Remember, you’re stronger than you think, and taking these steps is the first step to feeling better! 😊";

    // Handle form submission
    diagnosisForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const inputText = symptomsInput.value.trim();
        if (!inputText) {
            diagnosisResult.innerHTML = `<p>Please enter at least one symptom.</p>`;
            return;
        }

        const symptoms = inputText.toLowerCase().split(',').map(symptom => symptom.trim());
        let treatmentDetails = "";
        let unknownSymptoms = [];

        // Check symptoms against the dataset
        symptoms.forEach(symptom => {
            if (symptomDiagnosisData[symptom]) {
                const data = symptomDiagnosisData[symptom];
                treatmentDetails += `
                    <p><strong>Diagnosis for ${symptom}:</strong> ${data.diagnosis}</p>
                    <p><strong>Medicine:</strong> ${data.medicine}</p>
                    <p><strong>Treatment:</strong> ${data.treatment}</p>
                    <p><strong>Recommended Nutrients:</strong> ${data.nutrients}</p>
                    <p><strong>Precautions:</strong> ${data.precautions}</p>
                    <hr>`;
            } else {
                unknownSymptoms.push(symptom);
            }
        });

        // Display results with a slight delay for better UX
        setTimeout(() => {
            if (treatmentDetails) {
                diagnosisResult.innerHTML = treatmentDetails + `<p>${sweetMessage}</p>`;
            } else {
                diagnosisResult.innerHTML = `<p>No diagnosis found. Please check the symptoms entered.</p>`;
            }

            // Show unknown symptoms if any
            if (unknownSymptoms.length > 0) {
                diagnosisResult.innerHTML += `<p><strong>Unrecognized Symptoms:</strong> ${unknownSymptoms.join(", ")}</p>`;
            }
        }, 500); // 0.5-second delay for a smoother experience
    });
});
