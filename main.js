const LinksSocialMedia = {
  github: 'THAISTROM',
  youtube: '/channel/UCPAhHwv3FrR2wJdpS5BR89w',
  facebook: 'iury.thais.94',
  instagram: 'iurythais',
  twitter: 'twitter'
}

function changesSocialMediaLinks() {
  for (let li of socialLinks.children){
    const social= li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  
  } 
} 

changesSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(Response => Response.json( ))
  .then(data => {
    userName.textContent =  data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url 
    UserImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfileInfos()


