const people = [
    {fullName: "John Adams", raiting: 59, ideas: 0, followings: 50, followers: 67},
    {fullName: "Maxim Moonbeam", raiting: 123, ideas: 165, followings: 54, followers: 254},
    {fullName: "Anthony Brown", raiting: 22, ideas: 4, followings: 2, followers: 322},
    {fullName: "Tomas Hill", raiting: 12, ideas: 231, followings: 752, followers: 2},
    {fullName: "Mark Abrams", raiting: 33, ideas: 276, followings: 7, followers: 1},
    {fullName: "Eugeniy Grigorenko", raiting: 76, ideas: 144, followings: 627, followers: 1876},
    {fullName: "Robert Yang", raiting: 2, ideas: 646, followings: 62, followers: 999},
    {fullName: "Tom Makkey", raiting: 333, ideas: 687, followings: 83, followers: 127},
    {fullName: "Nicholas Jakcson", raiting: 42, ideas: 934, followings: 59, followers: 674},
    {fullName: "Anton Sveridov", raiting: 1, ideas: 0, followings: 362, followers: 1},
    {fullName: "Albert Lee", raiting: 43, ideas: 671, followings: 78, followers: 231},
]

var tableData = (data) => {
    const tbody = document.getElementById("data-body")

    data.forEach((people, index) => {
        const row = document.createElement("tr")
        const fullnameTd = document.createElement("td")
        const userBlock = document.createElement("div")
        userBlock.classList.add("user-block")
        const avatarTd = document.createElement("img")
        avatarTd.classList.add("avatar")
        avatarTd.src = "assets/userpics/avatar-" + (index+1) + ".png"
        
        const userInfo = document.createElement("div")
        userInfo.classList.add("user-info")
        const nameSpan = document.createElement("span")
        nameSpan.textContent = people.fullName
        nameSpan.classList.add("name")
        const btn = document.createElement("button")
        btn.classList.add("sub-btn")
        btn.textContent = "+"

        btn.addEventListener("click", () => {
            if (btn.classList.contains("subscribed")) {
                btn.classList.remove("subscribed")
                btn.textContent = "+"
            } else {
                btn.classList.add("subscribed")
                btn.textContent = "unfollow"
            }
        })

        btn.addEventListener("mouseenter", () => {
            if (btn.classList.contains("subscribed")) {
                btn.textContent = "unfollow"
            } else { 
                btn.textContent = "follow"
            }
        })

         btn.addEventListener("mouseleave", () => {
            if (btn.classList.contains("subscribed")) {
                btn.textContent = "✔"
            } else {
                btn.textContent = "+"   
            }
        })

        const ratingSpan = document.createElement("span")
        ratingSpan.textContent = people.raiting
        ratingSpan.classList.add("rating")

        const ratingIcon = document.createElement("img")
        ratingIcon.classList.add("rating-icon")
        ratingIcon.src = "assets/icons/ratingIcon.png"
        const topString = document.createElement("div")
        topString.classList.add("name-btn-container")
        topString.append(nameSpan, btn)
        const bottomString = document.createElement("div")
        bottomString.classList.add("icon-rating-container")
        bottomString.append(ratingIcon, ratingSpan)
        
        const ideasTd = document.createElement("td")
        ideasTd.textContent = people.ideas
        const followingsTd = document.createElement("td")
        followingsTd.textContent = people.followings
        const followersTd = document.createElement("td")
        followersTd.textContent = people.followers

        userInfo.append(topString, bottomString)
        userBlock.append(avatarTd, userInfo)
        fullnameTd.append(userBlock)

        row.append(fullnameTd, ideasTd, followingsTd, followersTd)
        tbody.appendChild(row)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    tableData(people)
} )
