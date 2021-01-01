import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

export const FEDCourse = () => {
  // determined if page has scrolled and if the view is on mobile
  let [scrolled, setScrolled] = useState(false)

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header>
      <Link to="/">React Hooks on Gatsby</Link>
      <button onClick={() => setScrolled(scrolled++)}>BUTTON</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum
        posuere urna nec tincidunt. A iaculis at erat pellentesque adipiscing
        commodo elit at imperdiet. Vitae elementum curabitur vitae nunc sed.
        Facilisis sed odio morbi quis commodo odio aenean. Habitant morbi
        tristique senectus et netus. Libero justo laoreet sit amet cursus sit
        amet dictum. Ipsum consequat nisl vel pretium lectus quam id leo in.
        Tincidunt eget nullam non nisi est sit amet facilisis magna. Ut morbi
        tincidunt augue interdum velit. Arcu dictum varius duis at consectetur
        lorem. Consectetur lorem donec massa sapien faucibus et molestie.
        Consectetur adipiscing elit pellentesque habitant. Nisl tincidunt eget
        nullam non. Et egestas quis ipsum suspendisse ultrices. Risus viverra
        adipiscing at in. Facilisis sed odio morbi quis commodo odio. Posuere ac
        ut consequat semper viverra nam libero. Neque aliquam vestibulum morbi
        blandit cursus. Ornare aenean euismod elementum nisi quis eleifend quam.
        Consequat ac felis donec et odio. Dolor magna eget est lorem ipsum
        dolor. Lacus luctus accumsan tortor posuere ac ut consequat semper
        viverra. At erat pellentesque adipiscing commodo elit at imperdiet dui.
        Convallis posuere morbi leo urna molestie at elementum. Ullamcorper
        velit sed ullamcorper morbi tincidunt ornare massa. Urna et pharetra
        pharetra massa massa. Lorem sed risus ultricies tristique nulla aliquet
        enim tortor at. Interdum velit euismod in pellentesque. Duis ut diam
        quam nulla. Sed arcu non odio euismod lacinia at quis. Turpis in eu mi
        bibendum neque egestas congue quisque egestas. Laoreet non curabitur
        gravida arcu ac tortor dignissim convallis aenean. Elementum facilisis
        leo vel fringilla est ullamcorper. Facilisis leo vel fringilla est.
        Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Massa
        massa ultricies mi quis. Magna sit amet purus gravida quis blandit
        turpis cursus. Ut porttitor leo a diam sollicitudin tempor id eu nisl.
        Sit amet volutpat consequat mauris nunc congue nisi. Viverra ipsum nunc
        aliquet bibendum enim facilisis. Nascetur ridiculus mus mauris vitae
        ultricies leo. Faucibus ornare suspendisse sed nisi lacus sed viverra
        tellus. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
        Adipiscing enim eu turpis egestas pretium aenean pharetra. Sapien nec
        sagittis aliquam malesuada. Et malesuada fames ac turpis egestas sed
        tempus. Tortor dignissim convallis aenean et tortor at risus viverra
        adipiscing. Ultrices tincidunt arcu non sodales neque sodales ut etiam
        sit. Nibh venenatis cras sed felis eget velit aliquet sagittis. Non odio
        euismod lacinia at quis risus. Tempus urna et pharetra pharetra massa
        massa ultricies mi quis. Nunc consequat interdum varius sit amet. Neque
        viverra justo nec ultrices dui. Felis donec et odio pellentesque diam
        volutpat commodo sed. Netus et malesuada fames ac turpis egestas
        maecenas. Vestibulum lorem sed risus ultricies tristique nulla aliquet.
        Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
        Tempor orci dapibus ultrices in iaculis nunc sed augue. A erat nam at
        lectus urna duis convallis. Tellus in metus vulputate eu scelerisque
        felis imperdiet proin fermentum. Urna nec tincidunt praesent semper
        feugiat nibh. Nascetur ridiculus mus mauris vitae ultricies. Pulvinar
        elementum integer enim neque volutpat ac tincidunt vitae semper. Ante
        metus dictum at tempor commodo ullamcorper a lacus vestibulum. Eleifend
        donec pretium vulputate sapien nec. Volutpat diam ut venenatis tellus in
        metus vulputate eu scelerisque. Odio morbi quis commodo odio aenean sed.
        Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.
        Diam phasellus vestibulum lorem sed. Malesuada pellentesque elit eget
        gravida cum sociis natoque penatibus. Sem fringilla ut morbi tincidunt
        augue interdum velit euismod in. Velit aliquet sagittis id consectetur
        purus ut faucibus pulvinar elementum. Sed tempus urna et pharetra
        pharetra. Hac habitasse platea dictumst vestibulum rhoncus. In aliquam
        sem fringilla ut morbi tincidunt augue interdum. Ultricies integer quis
        auctor elit sed. In hac habitasse platea dictumst vestibulum rhoncus est
        pellentesque elit. Sem integer vitae justo eget magna fermentum. Congue
        eu consequat ac felis donec. Laoreet id donec ultrices tincidunt arcu
        non sodales neque sodales. Purus faucibus ornare suspendisse sed nisi
        lacus sed viverra. Sociis natoque penatibus et magnis dis parturient
        montes nascetur. Tristique senectus et netus et malesuada fames ac
        turpis. Eleifend mi in nulla posuere sollicitudin. Netus et malesuada
        fames ac turpis egestas maecenas. Tristique sollicitudin nibh sit amet
        commodo nulla facilisi nullam. Non diam phasellus vestibulum lorem sed
        risus ultricies tristique nulla. Netus et malesuada fames ac. Aliquet
        eget sit amet tellus cras. Dolor purus non enim praesent elementum
        facilisis. Id ornare arcu odio ut. Enim sed faucibus turpis in eu mi.
        Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut.
        Curabitur gravida arcu ac tortor dignissim convallis aenean. Mauris
        commodo quis imperdiet massa tincidunt nunc. Feugiat sed lectus
        vestibulum mattis. Vulputate odio ut enim blandit. Sed tempus urna et
        pharetra pharetra massa massa ultricies mi. Bibendum at varius vel
        pharetra vel turpis nunc eget lorem. Sed id semper risus in. Pharetra
        vel turpis nunc eget lorem dolor sed viverra. Sit amet commodo nulla
        facilisi nullam vehicula ipsum a arcu. Facilisis mauris sit amet massa.
        Diam sit amet nisl suscipit. Ac turpis egestas maecenas pharetra
        convallis posuere morbi leo. Consectetur adipiscing elit ut aliquam
        purus sit. Congue mauris rhoncus aenean vel elit scelerisque mauris
        pellentesque. Pellentesque diam volutpat commodo sed egestas egestas
        fringilla. Feugiat vivamus at augue eget arcu. Mauris augue neque
        gravida in. Massa id neque aliquam vestibulum. Arcu felis bibendum ut
        tristique et egestas. Mus mauris vitae ultricies leo integer malesuada.
        Lectus magna fringilla urna porttitor rhoncus dolor purus non enim.
        Massa eget egestas purus viverra accumsan in nisl nisi. Eget velit
        aliquet sagittis id consectetur purus ut faucibus pulvinar. Euismod
        elementum nisi quis eleifend quam adipiscing vitae proin. Semper quis
        lectus nulla at volutpat. Metus vulputate eu scelerisque felis. Gravida
        dictum fusce ut placerat orci nulla pellentesque dignissim enim.
        Habitant morbi tristique senectus et netus et malesuada fames ac. Ut eu
        sem integer vitae justo eget. Iaculis at erat pellentesque adipiscing
        commodo elit. Nam at lectus urna duis convallis. Viverra mauris in
        aliquam sem fringilla ut morbi tincidunt augue. Eu turpis egestas
        pretium aenean. Lectus quam id leo in vitae turpis massa. Egestas
        maecenas pharetra convallis posuere morbi leo urna molestie at. Aliquam
        ut porttitor leo a diam sollicitudin tempor id. Nibh cras pulvinar
        mattis nunc sed blandit. Mi tempus imperdiet nulla malesuada
        pellentesque. Ut venenatis tellus in metus vulputate eu scelerisque
        felis. Ac tincidunt vitae semper quis lectus nulla. Placerat orci nulla
        pellentesque dignissim enim sit amet venenatis urna. Ante in nibh mauris
        cursus mattis. Cursus sit amet dictum sit amet. Tempus imperdiet nulla
        malesuada pellentesque elit eget gravida. Neque aliquam vestibulum morbi
        blandit cursus risus at ultrices mi. Molestie at elementum eu facilisis
        sed. Tempor id eu nisl nunc mi ipsum faucibus vitae. Ac felis donec et
        odio pellentesque diam volutpat. Tortor pretium viverra suspendisse
        potenti nullam ac tortor vitae purus. Libero id faucibus nisl tincidunt
        eget nullam non nisi. Eu augue ut lectus arcu bibendum at. Est velit
        egestas dui id. Nullam ac tortor vitae purus faucibus ornare suspendisse
        sed nisi. Proin sagittis nisl rhoncus mattis rhoncus urna. Facilisis leo
        vel fringilla est ullamcorper eget nulla. Diam in arcu cursus euismod
        quis viverra nibh cras. Id velit ut tortor pretium viverra. Lacus
        viverra vitae congue eu consequat ac felis. Enim sed faucibus turpis in
        eu mi bibendum. Nunc sed velit dignissim sodales ut eu. Arcu cursus
        vitae congue mauris rhoncus aenean vel. Aliquam eleifend mi in nulla
        posuere sollicitudin. Bibendum ut tristique et egestas quis ipsum
        suspendisse. Ultrices mi tempus imperdiet nulla. Semper risus in
        hendrerit gravida rutrum quisque. Non tellus orci ac auctor augue
        mauris. Non odio euismod lacinia at quis risus. Etiam non quam lacus
        suspendisse faucibus. Justo laoreet sit amet cursus sit amet dictum sit
        amet. Velit euismod in pellentesque massa placerat duis ultricies lacus.
        Sed arcu non odio euismod. Aliquam sem et tortor consequat id porta
        nibh.
      </p>
    </header>
  )
}
