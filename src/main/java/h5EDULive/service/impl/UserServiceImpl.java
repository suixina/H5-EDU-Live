package h5EDULive.service.impl;

import h5EDULive.dao.UserRepository;
import h5EDULive.dao.domain.User;
import h5EDULive.service.UserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepository userRepository;

    /* 注册 */
    @Override
    public boolean isExist(String mobile) {
        return userRepository.findByMobile(mobile) != null;
    }

    @Override
    public boolean insert(User user) {
        encryptPassword(user);
        return userRepository.save(user) != null;
    }

    private void encryptPassword(User user) {
        String password = user.getPassword();
        password = new BCryptPasswordEncoder().encode(password.trim());
        user.setPassword(password);
    }

    @Override
    public boolean isRight(int id, String preCode) {
        return userRepository.findById(id).getPassword().equals(preCode);
    }

    @Override
    public void updatePassword(int id, String newCode) {
        newCode= new BCryptPasswordEncoder().encode(newCode.trim());
        userRepository.updateUserPassword(id, newCode);
    }

    @Override
    public void updateName(int id, String name) {
        userRepository.updateUserName(id, name);
    }

    @Override
    public void updateMajor(int id, String major) {
        userRepository.updateUserMajor(id, major);
    }

    @Override
    public void updateGender(int id, String gender) {
        userRepository.updateUserGender(id, gender);
    }

    @Override
    public void updateBirth(int id, String birth) {
        userRepository.updateUserBirthday(id, birth);
    }

    @Override
    public void updateProfile(int id, String profile) {
        userRepository.updateUserProfile(id, profile);
    }

    @Override
    public void updateLocation(int id, String location) {
        userRepository.updateUserLocation(id, location);
    }
}