import {format, parseISO} from 'date-fns'

const groupByDay = (projects) => {
  const groupings = []

  for (let i = 0; i < projects.length; i++) {
    let projectDay = format(parseISO(projects[i].createdAt), 'MMMM do')

    const dateExists = groupings.filter(proj => proj.date === projectDay)
    
    if (!dateExists.length) {
      groupings.push({
        date: projectDay,
        fullDate: projects[i].createdAt,
        projects: [projects[i]]
      })
      
    } else {
      groupings.forEach((proj, id) => {
        if (proj.date === projectDay) {
          groupings[id].projects.push(projects[i])
        }
      })
    }
  }

  return groupings
}

export default groupByDay