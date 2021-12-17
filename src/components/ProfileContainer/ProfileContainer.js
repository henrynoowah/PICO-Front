import React, { useState } from 'react'
import Info from './Contents/Info/Info'
import Work from './Contents/Work/Work'
import ProfileTop from './Contents/ProfileTop'
import styles from './ProfileContainer.module.css'

function ProfileContainer({ user }) {

  const [page, setPage] = useState(1)

  const pageBtnContainer = (
    <div className={styles.pageBtnContainer}>
      <div>
        <input type="radio" checked={page === 1} readOnly />
        <button onClick={() => setPage(1)}>소개</button>
      </div>
      {
        user.isPhotographer &&
        (
          <div>
            <input type="radio" checked={page === 2} readOnly />
            <button onClick={() => setPage(2)}>작업/사진</button>
          </div>
        )
      }
      {
        user.isPhotographer &&
        (
          <div>
            <input type="radio" checked={page === 3} readOnly />
            <button onClick={() => setPage(3)}>리뷰</button>
          </div>
        )
      }
    </div>
  )

  return (

    <div className={styles.container}>
      <div className={styles.profileContentContainer}>
        <ProfileTop user={user} />

        {pageBtnContainer}

        <div>
          {page === 1 && <Info user={user} />}
          {(page === 2 && user.isPhotographer) && <Work user={user} />}
          {(page === 3 && user.isPhotographer) && <div>Review</div>}
        </div>

      </div>
    </div>
  )
}

export default ProfileContainer
