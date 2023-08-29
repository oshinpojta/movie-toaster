import React from 'react'
import LoadingBar from 'react-top-loading-bar'


const TopLoader = (props) => {
    const { progress, setProgress } = props;
    // console.log(props);
    return (
      <div>
        <LoadingBar
          color='#ffffff'
          progress={progress}
          height={4}
          shadow={true}
          transitionTime={500}
          loaderSpeed={800}
          waitingTime={1000}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>
    )
}

export default TopLoader
