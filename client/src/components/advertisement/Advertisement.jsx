import "./advertisement.css";

function Advertisement() {
  const ads = [
    {
      id: 1,
      title: "Ramesh Plumber",
      link: "https://example.com/advertisement-1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrQj-GMI14vMh9O68vUp2P-iODLDtJPOEiFD1FiA3mg&s",
    },
    {
      id: 2,
      title: "Milan electrician",
      link: "https://www.justdial.com/Mumbai/Milan-Electrical-Hardware-Paints-Near-Navjeevan-Society-Chembur-East/022P1221124001G2P3H8_BZDET",
      image:
        "https://content.jdmagicbox.com/comp/mumbai/h8/022p1221124001g2p3h8/catalogue/milan-electrical-hardware-paints-mumbai-01djjo4iuz-250.jpg",
    },
    {
      id: 3,
      title: "Mynet broadband",
      link: "https://www.justdial.com/Mumbai/Krishna-Net-Near-Swami-Vivekanand-Marathi-School-Chembur-East/022PXX22-XX22-151211124358-Y3W8_BZDET",
      image:
        "https://content3.jdmagicbox.com/comp/mumbai/w8/022pxx22.xx22.151211124358.y3w8/catalogue/krishna-net-chembur-east-mumbai-internet-service-providers-riusq6fq96.jpg",
    },
  ];

  return (
    <div className="advertisement-list">
      {ads.map((ad) => (
        <div className="advertisement-card" key={ad.id}>
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img src={ad.image} alt={ad.title} />
            <p>{ad.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Advertisement;
