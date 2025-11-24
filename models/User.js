module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User",{
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,   // auto-generate GUID
            primaryKey: true,
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:  false,
            validate:{
                notEmpty:true
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:  false,
            validate:{
                notEmpty:true
            }
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:  false,
            validate:{
                notEmpty:true
            }
        }
    })
    return User;
};