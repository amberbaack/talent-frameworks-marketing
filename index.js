(() => {
  const frameworks = {
    'BFS60': 'Banking & Financial Sevices',
    'CON 1.0': 'Construction',
    'CRM 20': 'Customer Relationship Management',
    'CSS 100': 'Consulting Services',
    'EDU 10': 'Education',
    'ENE20': 'Energy',
    'GCF13': 'General Corporate Functions',
    'HTH 2.0': 'Hardware',
    'HC30': 'Healthcare',
    'HOS10': 'Hospitality',
    'IT160': 'Information Technology',
    'INS90': 'Insurance',
    'MFG60': 'Manufacturing',
    'MPU 1.0': 'Media and Publishing',
    'PHA 10': 'Pharmeceutical',
    'RE 1.0': 'Real Estate',
    'RET40': 'Retail',
    'HTS40': 'Software',
    'HTC2': 'Telecommunications'
  }

  const search = document.querySelector('#search')
  const results = document.querySelector('#searchResults')

  search.addEventListener('keyup', (event) => {
    var keyword = search.value

    console.log(`searching ${keyword}`)

    // remove any previous search results
    for (var i = 0; i < results.children.length; i++) {
      var child = results.children.item(i)
      child.parentNode.removeChild(child)
    }

    if (keyword.length > 1) {
      // append the results
      jobs.forEach(job => {
        if (job.jobTitle.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
          results.insertAdjacentHTML('afterbegin', `<tr><td>${frameworks[job.framework]}</td><td>${job.jobTitle}</td></tr>`)
        }
      })
    }
  })
})()
