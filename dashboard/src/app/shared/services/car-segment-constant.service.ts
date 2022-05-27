import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CarSegmentConstantService {
    
    private carSegemnts: any = [
        { 
            label: 'Car A', 
            value: 'Car A', 
            svg: 'vehicles:coupe',
            short_desc: 'Compact Hatchbacks',
            long_desc: 'A hatchback is a car body configuration with a rear door that swings upward to provide access to a cargo area. Most hatchbacks use a two-box design body style, where the cargo area and passenger areas are a single volume. The rear seats can often be folded down to increase the available cargo area'
        },
        { 
            label: 'Car B', 
            value: 'Car B', 
            svg: 'vehicles:liftback',
            short_desc: 'Premium Hatchbacks',
            long_desc: 'Premium hatchbacks are the perfect city cars. They provide the luxury of almost a sedan but they are easy to drive in bumper to bumper traffic. Also as the are fuel efficient due to their small size. '
        },
        { 
            label: 'Car C', 
            value: 'Car C', 
            svg: 'vehicles:sedan',
            short_desc: 'Sedan',
            long_desc: 'Sedan is a passenger car in a three-box configuration with separate compartments for an engine, passengers, and cargo. It has features like a B-pillar (between the front and rear windows) that supports the roof, two rows of seats and a rear interior volume of at least 33 cu ft.'
        },
        { 
            label: 'Car D', 
            value: 'Car D', 
            svg: 'vehicles:stretch',
            short_desc: 'Premium Sedan',
            long_desc: 'Premim Sedans are generally equipped with the most up-to-date and highest level technology and safety features that are not in standard sedans. These tech features include larger touchscreens, preventative safety tech and an array of cameras.'
        },
        { 
            label: 'SUV-Car A', 
            value: 'SUV-Car A', 
            svg: 'vehicles:crossover',
            short_desc: 'Bugget Friendly Sub 4 meter SUV',
            long_desc: 'These SUVs are taller than the hatchbacks and the sedans which offer only as much space as a large hatchback'
        },
        { 
            label: 'SUV-Car B', 
            value: 'SUV-Car B', 
            svg: 'vehicles:hatchback',
            short_desc: 'Premium Sub 4 meter SUV',
            long_desc: 'These SUVs are taller than the hatchbacks and the sedans which offer only as much space as a large hatchback with more features like extra space, luxurious interior and many more.'
        },
        { 
            label: 'SUV-Car C', 
            value: 'SUV-Car C', 
            svg: 'vehicles:suv',
            short_desc: 'SUV',
            long_desc: 'A sport utility vehicle or SUV is a car classification that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive.'
        },
        { 
            label: 'SUV-Car D', 
            value: 'SUV-Car D', 
            svg: 'vehicles:wagon',
            short_desc: 'Premium SUV',
            long_desc: 'A premium SUV is a high-quality, extra-large sport utility vehicle made to seat 7 or 8 passengers in three rows of seating. They also have powerhouse engines and room for plenty of cargo. The result is a smooth and spacious ride.'
        },
        { 
            label: 'MPV', 
            value: 'MPV', 
            svg: 'vehicles:minivan',
            short_desc: 'Multi-purpose Vehicles',
            long_desc: 'They have tall, box-like bodies designed to create as much interior space as possible and often have more seats than a comparable hatchback or saloon.'
        },
        
    ];

    get() {
        return this.carSegemnts;
    }
}

