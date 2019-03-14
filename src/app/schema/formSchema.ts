export class FormDataSet {
    section1: [
        {
            header: string,
            description: string,
            question1: string,
            response1: string,
            question2: string,
            response2: string,
            question3: string,
            response3: string,
            question4: string,
            response4: string
        }
    ];
    section2: [
        {
            header: string,
            description: string,
            question1: string,
            optionsOf1: [
                {
                    option1: string,
                    option2: string
                }
            ];
            response1: string,
            optionsOf2: [
                {
                    option1: string,
                    option2: string,
                    option3: string,
                    other: string

                }
            ];

            question2: string,
            response2: string,
            question3: string,
            response3: string,
            question4: string,
            response4: string,
            question5: string,
            response5: string,
            question6: string,
            response6: string,
            question7: string,
            response7: string
        }
    ];
    section3: [
            {
            header: string,
            description: string,

            question1: string,
            checkBox1: [
                {
                    email: boolean,
                    physicalCopy: boolean
                }
            ];
            question2: string,
            checkBox2: [
                {
                    email: boolean,
                    physicalCopy: boolean
                }
            ];
            question4: string,
            checkBox4: [
                {
                    email: boolean,
                    physicalCopy: boolean
                }
            ];
            question5: string,
            checkBox5: [
                {
                    email: boolean,
                    physicalCopy: boolean
                }
            ];
            question6: string,
            checkBox6: [
                {
                    email: boolean,
                    physicalCopy: boolean
                }
            ];
        }
    ];
}

export class Test {
    section1: {
        header: string;
    };
}
