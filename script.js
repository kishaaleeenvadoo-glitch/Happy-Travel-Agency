function showRecommendation(type) {
    const container = document.getElementById("recommendation-container");
    container.innerHTML = "";

    if (type === "beach") {
        container.innerHTML = `
            <h3>Beach Recommendation</h3>
            <p>Relax at beautiful tropical beaches with clear waters and golden sand.</p>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98">
        `;
    }

    if (type === "temple") {
        container.innerHTML = `
            <h3>Temple Recommendation</h3>
            <p>Explore ancient temples filled with culture, history, and spirituality.</p>
            <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada">
        `;
    }

    if (type === "japan") {
        container.innerHTML = `
            <h3>Japan Recommendation</h3>
            <p>Experience the perfect blend of modern city life and traditional culture.</p>
            <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9">
            <img src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26">
        `;
    }
}