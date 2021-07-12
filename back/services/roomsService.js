const { Users, Room, UserRoom } = require('./../database/schema/index')
const apiError = require('./../exeptions/apiError')
const tokenService = require('./../services/auth/tokenService')


class RoomsService
{
    async all(){
        return await Room.findAll();
        // return await Room.findByPk(1, {
        //     include: [ { model: Users, as: 'user_room' } ]
        // });
        // io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
        //     include: 'room_user'
        // }),
    }
    async create(name, token) {
        try{
            if (!name || !token){
                console.log('roomsService 14 line')
                // проверка на наличие + на такое же имя
            }
            const createRoom = await Room.create({
                UserId: tokenService.validateRefreshToken(token).id,
                name: name,
            });
            await UserRoom.create({
                RoomId: createRoom.id,
                UserId: createRoom.UserId,
                status: false,
            })

            return createRoom;

        } catch (e) {
            return e;
        }
    }
    // async relatedModel(data){
    //     try{
    //         await UserRoom.create({
    //             RoomId: data.id,
    //             UserId: data.UserId,
    //             status: false,
    //         })
    //     } catch (e) {
    //         return e;
    //     }
    // }
    async join(roomId, token){
        const userId = tokenService.validateRefreshToken(token).id;
        const data = await UserRoom.findOne({
            where: {
                RoomId: roomId,
                UserId: userId
            },
        })
        if (data){
            throw apiError.badRequest(`Пользователь с именем ${name} уже существует`);
        }
        return await UserRoom.create({
            RoomId: roomId,
            UserId: userId,
            status: false,
        })

    }

}

module.exports = new RoomsService();
