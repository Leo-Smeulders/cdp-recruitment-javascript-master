const { describe, expect, it } = require('@jest/globals')
const { data } = require('../../data')
const { filterAnimalsByName, filterPeopleMatches, filterCountryMatches } = require('./filter')

describe('filterAnimalsByName', () => {
  const animalsList = [
    { name: 'Anoa' },
    { name: 'Boa' },
    { name: 'Duck' },
    { name: 'Narwhal' },
    { name: 'Badger' },
    { name: 'Cobra' },
    { name: 'Crow' }
  ]
  it('should return a filtered list of animals corresponding the input', () => {
    expect(filterAnimalsByName(animalsList, 'uc')).toStrictEqual([{ name: 'Duck' }])
    expect(filterAnimalsByName(animalsList, 'oa')).toStrictEqual([{ name: 'Anoa' }, { name: 'Boa' }])
  })
})

describe('filterPeopleMatches', () => {
  const people = [
    {
      name: 'Winifred Graham',
      animals:
        [
          { name: 'Anoa' },
          { name: 'Duck' },
          { name: 'Narwhal' },
          { name: 'Badger' },
          { name: 'Cobra' },
          { name: 'Crow' }
        ]
    },
    {
      name: 'Blanche Viciani',
      animals:
        [
          { name: 'Barbet' },
          { name: 'Rhea' },
          { name: 'Snakes' },
          { name: 'Antelope' },
          { name: 'Echidna' },
          { name: 'Crow' },
          { name: 'Guinea Fowl' },
          { name: 'Deer Mouse' }
        ]
    }
  ]
  it('should return a filtered list of people whose animals match the filter', () => {
    expect(filterPeopleMatches(people, 'uc')).toStrictEqual([{
      name: 'Winifred Graham', animals: [{ name: 'Duck' }]
    }])
    expect(filterPeopleMatches(people, 'ro')).toStrictEqual([{
      name: 'Winifred Graham', animals: [{ name: 'Crow' }]
    }, {
      name: 'Blanche Viciani', animals: [{ name: 'Crow' }]
    }])
  })
})


describe('filterCountryMatches', () => {
  const ryResult = [
    {
      name: 'Uzuzozne',
      people: [
        {
          name: 'Lillie Abbott',
          animals: [
            {
              name: 'John Dory'
            }
          ]
        }
      ]
    },
    {
      name: 'Satanwi',
      people: [
        {
          name: 'Anthony Bruno',
          animals: [
            {
              name: 'Oryx'
            }
          ]
        }
      ]
    }
  ]
  it('should return a filtered list of people whose animals match the filter', () => {
    expect(filterCountryMatches(data, 'ry')).toStrictEqual(ryResult)
  })
})