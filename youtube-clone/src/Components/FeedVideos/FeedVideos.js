import "./FeedVideos.css"
const renderVideos = [
          {
                    id: 0,
                    name: 'image1',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights ',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 1,
                    name: 'image2',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 2,
                    name: 'image3',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 3,
                    name: 'image4',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 4,
                    name: 'image5',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 5,
                    name: 'image6',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 6,
                    name: 'image7',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 7,
                    name: 'image8',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
          {
                    id: 8,
                    name: 'image9',
                    video:
                              'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                    videoTitle:
                              'India Vs Australia 4th T20 Match Full Highlights 2023 | IND Vs AUS Highlights 2023',
                    channelName: 'Coading Youtuber',
                    viewsForVideo: '222k',
                    uploadDuration: '22 hours ago',
          },
];
export default function FeedVideos({ selectedCategory, isSidebarOpen }) {
          if (isSidebarOpen === "true") {
                    document.body.style.position = "fixed"
          }

          return (
                    <div className="feed-videos" >
                              <h1>You have select :  {selectedCategory} </h1>
                              <div className="ytd-videos">
                                        {renderVideos.map((videoCard) => (
                                                  <>
                                                            <div className="video-container" key={videoCard.id}>
                                                                      <div className="video">
                                                                                <video
                                                                                          className="video-link"
                                                                                          src={videoCard.video}
                                                                                          controls
                                                                                />
                                                                                <div className="details-container">
                                                                                          <div className="channel-profile">
                                                                                                    <img
                                                                                                              src={'https://xsgames.co/randomusers/avatar.php?g=male'}
                                                                                                              alt={videoCard.name}
                                                                                                    />
                                                                                          </div>
                                                                                          <div className="video-details">
                                                                                                    <div className="video-title">{videoCard.videoTitle}</div>
                                                                                                    <div className="channel-name">
                                                                                                              {videoCard.channelName}
                                                                                                    </div>
                                                                                                    <div className="video-duration">
                                                                                                              <p className="video-views">
                                                                                                                        {videoCard.viewsForVideo} views
                                                                                                              </p>
                                                                                                              <span className="video-upload-duration">
                                                                                                                        {videoCard.uploadDuration}
                                                                                                                        {/* {console.log(videoCard.id)} */}
                                                                                                              </span>
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </>
                                        ))}
                              </div>
                    </div >
          )
}