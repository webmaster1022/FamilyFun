import * as contentful from 'contentful'

var client = contentful.createClient({
    space: 'vpjhxsjc4ujp',
    accessToken: '3a759520570545b786b810fe70580e52fdf82c7952a4a899f4abe915fa3fbf89'
})

export function fetchEvents () {

    return (dispatch) => {

        client.getEntries({ content_type: 'events' }).then((res)=>{

            const eventsList = res.items.map((item) => ({
            title: item.fields.title,
            imageSrc: `http:${item.fields.image.fields.file.url}`,
            date: '',
            brief: item.fields.brief,
            content: item.fields.details,


        }));



        dispatch ({
            type: 'ADD_EVENTS',
            text: eventsList
        })
    }
)

}
}

