import KiaSpectra from './kia-spectra.png';
import RenoLogan from './reno-logan.png';
import KiaSeed from './kia-seed.png';

const carFinder = (carId: string | number) => {
    const cars:any = [KiaSpectra, RenoLogan, KiaSeed]

    return cars[carId];
};

export default carFinder;