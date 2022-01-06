# Create a class that captures students. 
# Each student has a first name, last name, class year, and major. 
# Create two examples of students.


class Students:
    "a student class"

    def __init__(self, fname, lname, class_year, major):
        self.fname=fname
        self.lname=lname
        self.class_year=class_year
        self.major=major

    def print_me(self):
        print(f"Hi, I am {self.fname} {self.lname}. I am a student of {self.major} and i graduate in {self.class_year}.")
    
amal=Students('Amal','Taymoor','2022','baatain')
amal.print_me()


# Create a solar system class that captures different atomic bodies. 


class Solarsystembody:
    "a body inside solar system"

    def __init__(self, name, bodytype):
        self.name=name
        self.bodytype=bodytype

    def print_it(self):
        print(f"{self.name} that is a {self.bodytype}.")

class Planet(Solarsystembody):
    "a planet"

    def __init__(self, name):
        super().__init__(name, 'planet')

class Star(Solarsystembody):
    "a star"

    def __init__(self, name):
        super().__init__(name, 'star')

class Blackhole(Solarsystembody):
    "a blackhole"

    def __init__(self, name):
        super().__init__(name, 'blackhole')



    

class Solarsystem:
    "a solar system"


    mercury=Planet('mercury')
    earth=Planet('earth')
    mars=Planet('mars')
    neptune=Planet('neptune')



    planets=[mercury,mars,earth,neptune]

    def __init__(self):
        self.stars=[]
      

    def print_it(self):
        for planet in Solarsystem.planets:
            planet.print_it()

    def add_star(self, star_name):
        star=Star(star_name)
        self.stars.append(star)
        star.print_it()
        for star in self.stars:
            print(star.name)