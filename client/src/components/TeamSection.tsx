import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Likeur",
      avatar: "https://avatars.githubusercontent.com/u/102558960?v=4",
      github: "https://github.com/meschacirung"
    },
    {
      name: "M. Irung", 
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      github: "https://github.com/meschacirung"
    },
    {
      name: "B. Ng",
      avatar: "https://avatars.githubusercontent.com/u/31113941?v=4", 
      github: "https://github.com/meschacirung"
    }
  ]

  const communityAvatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg", 
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/men/9.jpg",
    "https://randomuser.me/api/portraits/men/10.jpg"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Team Members */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-16 h-16 mx-auto mb-2 ring-2 ring-capacity-purple/20 hover:ring-capacity-purple/60 transition-smooth">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium">{member.name}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-4">
          Built by makers <span className="text-gradient">for makers</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Capacity was built by makers for makers.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12">
          We believe in the power indie hackers and makers.
        </p>

        {/* Community Avatars */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {communityAvatars.map((avatar, index) => (
            <a
              key={index}
              href="https://github.com/meschacirung"
              target="_blank"
              rel="noopener noreferrer"
              title="Méschac Irung"
              className="group"
            >
              <Avatar className="w-10 h-10 ring-2 ring-white hover:ring-capacity-purple/60 transition-smooth group-hover:scale-110">
                <AvatarImage src={avatar} alt="Team member" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection