import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOption = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One free personal training session"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Two free personal training sessions",
                "Access to group classes",
                "Free fitness assessment"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "duration": "Monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited personal training sessions",
                "Access to all group classes",
                "Free fitness assessment",
                "Free yoga and pilates classes",
                "Sauna and steam room access"
            ]
        },
        {
            "id": 4,
            "name": "Yearly Standard Plan",
            "price": 499.99,
            "duration": "Yearly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Two free personal training sessions per month",
                "Access to group classes",
                "Monthly fitness assessment",
                "Discount on spa services"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl font-medium text-center mb-10">Best Prices</h2>
            <div className="grid md:grid-cols-4 gap-10">
                {
                    priceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;