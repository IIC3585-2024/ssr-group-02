'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import SerieBox from '../../../components/serieBox/SerieBox';
import ReviewSection from '../../../components/reviewSection/ReviewSection';
import cong from '../../../firebase/configuration';

export default function Serie() {
    const params = useParams();
    const { id } = params;

    const [serie, setSerie] = useState({});

    const getSeries = async () => {
        const db = getFirestore(cong);
        const snapshot = await getDocs(collection(db, "visualmaniaDB"));
        let series = snapshot.docs.map(doc => doc.data());
        series = calculateStars(series);
        const selectedSerie = series.find(s => s.id === parseInt(id));
        console.log(selectedSerie);
        setSerie(selectedSerie || {});
    };

    const calculateStars = (series) => {
        let id = 0;
        series.forEach(serie => {
            serie.id = id++;
            let totalStars = 0;
            serie.reviews.forEach(review => {
                totalStars += review.rating;
            });
            serie.promedioEstrellas = totalStars / serie.reviews.length || 0;
            serie.numCalificaciones = serie.reviews.length;
        });
        return series;
    }

    useEffect(() => {
        if (id) {
            getSeries();
        }
    }, [id]);

    return (
        <main>
            <SerieBox serie={serie}/>
            {/* <ReviewSection email={data.userEmail} /> */}
        </main>
    )
}