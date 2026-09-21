
## 🛠️ Tecnologia utilizzate

* TypeScript
* Object-Oriented Programming (OOP)


# 💼 Self-Employed Tax Calculator

A TypeScript project developed using **Object-Oriented Programming (OOP)** to calculate the taxes that individual self-employed workers have to pay and determine their **annual net income** based on their gross annual income, taxes, and profitability coefficient.

The program uses both **abstract and non-abstract classes**.


## 🧰 Properties

* `codredd: number` — profitability coefficient
* `redditoAnnuoLordo: number` — gross annual income
* `tasseInps: number` — INPS tax rate
* `tasseIrpef: number` — IRPEF tax rate

## ⚙️ Methods

* `getUtileTasse(): number` — calculates the taxable income
* `getTasseInps(): number` — calculates the INPS taxes
* `getTasseIrpef(): number` — calculates the IRPEF taxes
* `getRedditoAnnuoNetto(): number` — calculates the annual net income
