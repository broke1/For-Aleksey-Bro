export default {

  async getImagesGallery() {
    const token = "IGQVJWRmwyRV81Y1BYUGpmTHMwYzNrSlE4VDdCS19XeTV1ZA0g0cW5mbnhoQy1kU003d3plcHNxMlFJWV90cTBmVmlQOGpCS2drWGs0OUxwTFotV2YyRHpzTGRIazJCTVVQdTJYeDFISm9CUXpDXzF3bgZDZD"
    let response = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,children%7Bfields=id,media_url,thumbnail_url,permalink%7D&limit=250&access_token=${token}`)
      .catch (error => {
        return 'error'
      }) 

    return response
  },

 


}